import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

export const IndexPageTemplate = ({
  titleContainer,
  backgroundColor,
  date,
}) => (
  <div
    style={{
      background: `${backgroundColor}`,
    }}
  >
    <h1 hidden={!titleContainer.titleIsVisible}>{titleContainer.title}</h1>
    <p>{date}</p>
  </div>
)

IndexPageTemplate.propTypes = {
  titleContainer: PropTypes.PropTypes.shape({
    title: PropTypes.string.isRequired,
    titleIsVisible: PropTypes.bool.isRequired,
  }).isRequired,
  backgroundColor: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
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
        }
        backgroundColor
        date
      }
    }
  }
`
