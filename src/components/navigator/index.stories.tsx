import React from 'react'
import Navigator from './index'

export default { title: 'Navigator' }

export const Default = () => {
  return (
    <Navigator onNext={() => null} onPrev={() => null} onToday={() => null} />
  )
}
