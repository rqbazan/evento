import React from 'react'
import cs from 'classnames'

export interface HeaderItem {
  className?: string
}

const HeaderItem: React.FC<HeaderItem> = ({ children, className }) => {
  return (
    <div
      className={cs(
        'py-2 px-4 bg-indigo-700 text-white text-lg text-center border border-indigo-900',
        className
      )}
    >
      {children}
    </div>
  )
}

export default HeaderItem
