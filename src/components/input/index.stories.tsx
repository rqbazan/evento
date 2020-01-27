import React from 'react'
import Input from './index'
import Icon from '../icon'

export default { title: 'Input' }

export const Default = () => {
  return <Input />
}

export const WithIcon = () => {
  return <Input icon={<Icon name="time" />} />
}
