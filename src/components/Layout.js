import React from 'react'
import PropTypes from 'prop-types'
import '../styles/main.scss'

const TemplateWrapper = ({ children }) => {
  return <div>{children}</div>
}

TemplateWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default TemplateWrapper
