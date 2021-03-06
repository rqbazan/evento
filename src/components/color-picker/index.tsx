import React from 'react'
import { CirclePicker } from 'react-color'

const palette = [
  '#ffffff',
  '#f44336',
  '#e91e63',
  '#9c27b0',
  '#673ab7',
  '#3f51b5',
  '#2196f3',
  '#03a9f4',
  '#00bcd4',
  '#009688',
  '#4caf50',
  '#8bc34a',
  '#cddc39',
  '#ffeb3b',
  '#ffc107',
  '#ff9800',
  '#ff5722',
  '#795548'
]

export interface ColorPickerProps {
  value: string
  onChange(color: string): void
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  value: defaultValue = palette[0],
  onChange
}) => {
  const [value, setValue] = React.useState(defaultValue)

  return (
    <CirclePicker
      color={value}
      colors={palette}
      onChangeComplete={({ hex }) => {
        setValue(hex)
        if (onChange) {
          onChange(hex)
        }
      }}
    />
  )
}

export default ColorPicker
