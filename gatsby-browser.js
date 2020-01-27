import React from 'react'
import { ModalProvider, ModalCanvas } from '~/lib/modal'
import '~/global.css'

export const wrapRootElement = ({ element }) => {
  return (
    <ModalProvider>
      {element}
      <ModalCanvas />
    </ModalProvider>
  )
}
