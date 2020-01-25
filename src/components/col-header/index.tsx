import React from 'react'

const ColHeader: React.FC = ({ children }) => {
  return (
    <div className="py-2 px-4 bg-accent-100 text-white text-lg text-center border border-accent-700">
      {children}
    </div>
  )
}

export default ColHeader
