import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

export const IndexPageTemplate = ({
  titleContainer,
  backgroundColor,
  date,
  image,
}) => (
  <div
    style={{
      background: `${backgroundColor}`,
    }}
  >
    <h1
      style={{ textAlign: `${titleContainer.align}` }}
      hidden={!titleContainer.titleIsVisible}
    >
      {titleContainer.title}
    </h1>
    <p>{date}</p>
    <img src={image} alt="img" />
  </div>
)

IndexPageTemplate.propTypes = {
  titleContainer: PropTypes.PropTypes.shape({
    title: PropTypes.string.isRequired,
    titleIsVisible: PropTypes.bool.isRequired,
    align: PropTypes.string.isRequired,
  }).isRequired,
  backgroundColor: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        titleContainer={frontmatter.titleContainer}
        backgroundColor={frontmatter.backgroundColor}
        date={frontmatter.date}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.oneOfType([PropTypes.object]),
    }),
  }).isRequired,
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        titleContainer {
          title
          titleIsVisible
          align
        }
        backgroundColor
        date
        image
      }
    }
  }
`
