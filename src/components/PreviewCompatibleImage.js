import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const PreviewCompatibleImage = ({ image, alt }) => {
  if (image.childImageSharp) {
    return <Img fluid={image.childImageSharp.fluid} alt={alt} />
  }

  if (typeof image === 'string') return <img src={image} alt={alt} />

  return null
}

PreviewCompatibleImage.propTypes = {
  image: PropTypes.oneOfType([
    PropTypes.shape({
      childImageSharp: PropTypes.oneOfType([PropTypes.object]),
    }),
    PropTypes.string,
  ]),
  alt: PropTypes.string,
}

PreviewCompatibleImage.defaultProps = {
  image: [
    {
      childImageSharp: {},
    },
  ],
  alt: '',
}

export default PreviewCompatibleImage
