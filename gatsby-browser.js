import React from 'react'
import { Provider as StoreProvider } from 'react-redux'
import { ModalProvider, ModalCanvas } from '~/lib/modal'
import store from '~/store'
import '~/global.css'

export const wrapRootElement = ({ element }) => {
  return (
    <StoreProvider store={store}>
      <ModalProvider>
        {element}
        <ModalCanvas />
      </ModalProvider>
    </StoreProvider>
  )
}
