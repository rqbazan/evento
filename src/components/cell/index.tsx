/* eslint jsx-a11y/click-events-have-key-events: 0, jsx-a11y/no-static-element-interactions: 0 */
import React from 'react'
import formatDate from 'date-fns/format'
import isToday from 'date-fns/isToday'
import endOfDay from 'date-fns/endOfDay'
import isWeekend from 'date-fns/isWeekend'
import isPast from 'date-fns/isPast'
import cs from 'classnames'

export interface CellProps {
  date: Date
  className?: string
  onClick(): void
}

const Cell: React.FC<CellProps> = ({ className, date, onClick, children }) => {
  const pinned = isToday(date)
  const disabled = isPast(endOfDay(date))
  const highlighted = isWeekend(date)

  return (
    <div
      onClick={() => {
        if (!disabled) {
          onClick()
        }
      }}
      style={{ minHeight: 166, maxHeight: 0 }}
      className={cs(
        'flex flex-col border border-border p-2 bg-white cursor-pointer focus:outline-none',
        {
          'bg-gray-300': highlighted,
          'cursor-not-allowed': disabled,
          'hover:bg-yellow-100': !disabled
        },
        className
      )}
    >
      <div
        className={cs(
          'rounded-full h-8 w-8 flex flex-shrink-0 items-center justify-center font-medium',
          {
            'bg-red-700 text-white': pinned,
            'text-gray-500': disabled
          }
        )}
      >
        {formatDate(date, 'dd')}
      </div>
      {children && (
        <ul className="mt-2 flex flex-col min-h-0 overflow-auto">{children}</ul>
      )}
    </div>
  )
}

export default Cell
