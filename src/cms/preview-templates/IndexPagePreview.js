import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <IndexPageTemplate
        titleContainer={data.titleContainer || {}}
        backgroundColor={data.backgroundColor}
        date={data.date}
        image={getAsset(data.image)}
      />
    )
  }
  return <div>Loading...</div>
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }).isRequired,
  getAsset: PropTypes.func.isRequired,
}

export default IndexPagePreview
