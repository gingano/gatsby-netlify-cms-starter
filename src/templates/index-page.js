import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

export const IndexPageTemplate = ({
  title,
  titleIsVisible,
  backgroundColor,
  date,
}) => (
  <div
    style={{
      background: `${backgroundColor}`,
    }}
  >
    <h1 hidden={!titleIsVisible}>{title}</h1>
    <p>{date}</p>
  </div>
)

IndexPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  titleIsVisible: PropTypes.bool.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.titleContainer.title}
        titleIsVisible={frontmatter.titleContainer.titleIsVisible}
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
