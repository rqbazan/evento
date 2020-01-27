import React from 'react'
import cs from 'classnames'
import Icon from '../icon'

export interface NavigatorProps {
  onNext(): void
  onPrev(): void
  onToday(): void
}

type InlineButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

const InlineButton: React.FC<InlineButtonProps> = ({ className, ...props }) => (
  <button
    type="button"
    className={cs(
      'h-8 px-1 focus:outline-none bg-gray-100 hover:bg-gray-200 rounded',
      className
    )}
    {...props}
  />
)

const Navigator: React.FC<NavigatorProps> = ({ onNext, onPrev, onToday }) => {
  return (
    <div className="inline-flex items-center">
      <InlineButton onClick={onPrev} className="mr-2">
        <Icon name="cheveron" style={{ transform: 'rotate(180deg)' }} />
      </InlineButton>
      <InlineButton onClick={onToday} className="mr-2 px-4">
        Today
      </InlineButton>
      <InlineButton onClick={onNext}>
        <Icon name="cheveron" />
      </InlineButton>
    </div>
  )
}

export default Navigator
