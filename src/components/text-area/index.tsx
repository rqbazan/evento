import React from 'react'
import cs from 'classnames'

export type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, style, maxLength, onChange, ...props }, ref) => {
    const [count, setCount] = React.useState(0)

    return (
      <div style={style} className={cs('flex flex-col', className)}>
        <textarea
          ref={ref}
          className="px-4 py-3 w-full rounded border border-gray-400 focus:outline-none focus:border-gray-500"
          maxLength={maxLength}
          onChange={e => {
            setCount(e.target.value.length)
            if (onChange) {
              onChange(e)
            }
          }}
          {...props}
        />
        {maxLength && (
          <div className="flex justify-end mt-1">
            <span>{`${count}/${maxLength}`}</span>
          </div>
        )}
      </div>
    )
  }
)

export default TextArea
