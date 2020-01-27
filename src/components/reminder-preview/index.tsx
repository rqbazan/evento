import React from 'react'
import { darken } from 'polished'
import cs from 'classnames'

export interface ReminderPreviewProps {
  time: string
  bgColor: string
  description: string
  className?: string
}

const ReminderPreview: React.FC<ReminderPreviewProps> = ({
  time,
  description,
  bgColor,
  className
}) => {
  return (
    <li
      className={cs('rounded px-2 py-1 font-medium text-sm', className)}
      style={{
        backgroundColor: bgColor,
        color: darken(0.4, bgColor)
      }}
    >
      {time}
      {' - '}
      {description}
    </li>
  )
}

export default ReminderPreview
