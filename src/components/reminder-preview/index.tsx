import React from 'react'
import formatDate from 'date-fns/format'
import { darken } from 'polished'
import cs from 'classnames'

export interface ReminderPreviewProps {
  dueDate: Date
  bgColor: string
  text: string
  className?: string
}

const ReminderPreview: React.FC<ReminderPreviewProps> = ({
  dueDate,
  text,
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
      {formatDate(dueDate, 'hh:mm a')}
      {' - '}
      {text}
    </li>
  )
}

export default ReminderPreview
