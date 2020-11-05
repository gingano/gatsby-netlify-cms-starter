/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import CMS from 'netlify-cms-app'

// const defaultSeparator = '\n'

export const SlidesControl = (props) => {
  const [value, setValue] = useState('/img/products-grid2.jpg')
  const ImageControl = CMS.getWidget('image').control

  const changeHandle = (changedValue) => {
    setValue(changedValue)
  }

  return (
    <div>
      <ImageControl
        {...props}
        value={value}
        onChange={(changedValue) => changeHandle(changedValue)}
      />
    </div>
  )
}

export const SlidesPreview = () => {
  const ImageControl = CMS.getWidget('image').control

  return <div>{ImageControl}</div>
}
