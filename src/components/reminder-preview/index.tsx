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
      role="button"
      tabIndex={0}
      onKeyPress={onClick}
      onClick={onClick}
      className={cs(
        'rounded px-2 py-1 font-medium text-sm focus:outline-none',
        className
      )}
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
