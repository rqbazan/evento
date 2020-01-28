/* eslint jsx-a11y/click-events-have-key-events: 0, jsx-a11y/no-static-element-interactions: 0, jsx-a11y/no-noninteractive-element-interactions: 0 */
import React from 'react'
import { darken } from 'polished'
import cs from 'classnames'

export interface ReminderPreviewProps {
  time: string
  bgColor: string
  description: string
  className?: string
  onClick?: () => void
}

const ReminderPreview: React.FC<ReminderPreviewProps> = ({
  time,
  description,
  bgColor,
  className,
  onClick
}) => {
  return (
    <div
      onClick={onClick}
      className={cs('rounded px-2 py-1 font-medium text-sm', className)}
      style={{
        backgroundColor: bgColor,
        color: darken(0.4, bgColor)
      }}
    >
      {time}
      {' - '}
      {description}
    </div>
  )
}

export default ReminderPreview
