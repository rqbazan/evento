import React from 'react'
import format from 'date-fns/format'
import cs from 'classnames'

export interface CellProps {
  date: Date
  isToday?: boolean
  className?: string
}

const Cell: React.FC<CellProps> = ({
  className,
  date,
  isToday = false,
  children
}) => {
  return (
    <div
      role="button"
      className={cs(
        'flex flex-col border border-border bg-cell p-2',
        className
      )}
      style={{ minHeight: 166, maxHeight: 166 }}
    >
      <div
        className={cs(
          'rounded-full h-8 w-8 flex flex-shrink-0 items-center justify-center self-end text-right',
          {
            'bg-red-700 text-cell': isToday
          }
        )}
      >
        {format(date, 'dd')}
      </div>
      {children && (
        <ul className="mt-2 flex flex-col min-h-0 overflow-auto">{children}</ul>
      )}
    </div>
  )
}

export default Cell
