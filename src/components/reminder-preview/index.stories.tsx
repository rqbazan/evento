import React from 'react'
import { color } from '@storybook/addon-knobs'
import ReminderPreview from './index'

export default { title: 'ReminderPreview' }

export const Default = () => {
  const bgColor = color('bgColor', '#efdcee')

  return (
    <ul>
      <ReminderPreview
        dueDate={new Date()}
        text="HR Interview"
        bgColor={bgColor}
      />
    </ul>
  )
}
