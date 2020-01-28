/* eslint jsx-a11y/click-events-have-key-events: 0, jsx-a11y/no-static-element-interactions: 0 */
import React from 'react'
import ReactDOM from 'react-dom'
import Icon from '~/components/icon'
import Escapable from './escapable'

export interface Controller {
  open(component: React.FC, props?: any): void
  close(): void
}

export interface Context {
  controller?: Controller
  modal?: {
    component: React.FC | null
    props?: any
  }
}

export const ModalContext = React.createContext<Context>({})

export const ModalProvider: React.FC = ({ children }) => {
  const [modal, setModal] = React.useState<Context['modal']>({
    component: null
  })

  const controller: Controller = {
    open: (component, props) => setModal({ component, props }),
    close: () => setModal({ component: null })
  }

  return (
    <ModalContext.Provider value={{ controller, modal }}>
      {children}
    </ModalContext.Provider>
  )
}

let canvasEl: any = null

export function ModalCanvas() {
  const { modal, controller } = React.useContext(ModalContext)

  if (!modal?.component || !controller) {
    return null
  }

  if (!canvasEl) {
    canvasEl = document.createElement('div')
    document.body.appendChild(canvasEl)
  }

  return ReactDOM.createPortal(
    <Escapable onEscape={controller.close}>
      <div
        className="flex items-center justify-center fixed z-50 h-screen w-full top-0"
        onClick={controller.close}
      >
        <div
          className="h-full w-full bg-gray-200 p-4 md:h-auto md:w-auto md:shadow-md"
          onClick={e => e.stopPropagation()}
        >
          <div className="relative">
            <div
              role="button"
              tabIndex={0}
              className="absolute right-0 w-8 h-8"
              onClick={controller.close}
            >
              <Icon name="close" />
            </div>
            {React.createElement(modal.component, {
              controller,
              ...modal.props
            })}
          </div>
        </div>
      </div>
    </Escapable>,
    canvasEl
  )
}

export function useModal() {
  return React.useContext(ModalContext)
}
