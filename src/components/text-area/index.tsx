import React from 'react'

export interface TextAreaProps
  extends React.HTMLAttributes<HTMLTextAreaElement> {
  maxLength?: number
}

const TextArea: React.FC<TextAreaProps> = ({
  className,
  style,
  maxLength,
  ...props
}) => {
  const [count, setCount] = React.useState(0)

  return (
    <div style={style} className={className}>
      <textarea
        className="p-4 w-full rounded border border-gray-400 focus:outline-none focus:border-gray-500"
        maxLength={maxLength}
        onChange={e => {
          setCount(e.target.value.length)
          if (props.onChange) {
            props.onChange(e)
          }
        }}
        {...props}
      />
      {maxLength && (
        <div className="flex justify-end mt-2">
          <span>{`${count}/${maxLength}`}</span>
        </div>
      )}
    </div>
  )
}

export default TextArea
