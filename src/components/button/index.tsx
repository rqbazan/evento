import React from 'react'
import cs from 'classnames'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<ButtonProps> = ({ className, ...props }) => {
  return (
    <button
      type="button"
      className={cs(
        'h-10 bg-indigo-600 hover:bg-indigo-700 text-white px-4 rounded focus:outline-none',
        className
      )}
      {...props}
    />
  )
}

export default Button
