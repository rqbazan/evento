import React from 'react'
import TextArea from './index'

export default { title: 'TextArea' }

export const Default = () => {
  return <TextArea />
}

export const WithMaxLength = () => {
  return <TextArea maxLength={30} />
}
