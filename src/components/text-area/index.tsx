import React from 'react'
import cs from 'classnames'

export interface TextAreaProps
  extends React.HTMLAttributes<HTMLTextAreaElement> {
  maxLength?: number
}

const TextArea: React.FC<TextAreaProps> = ({
  className,
  style,
  maxLength,
  onChange,
  ...props
}) => {
  const [count, setCount] = React.useState(0)

  return (
    <div style={style} className={cs('flex flex-col', className)}>
      <textarea
        className="p-4 w-full rounded border border-gray-400 focus:outline-none focus:border-gray-500"
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

export default TextArea
