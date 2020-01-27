import React from 'react'

export interface EscapableProps {
  onEscape(): void
}

const Escapable: React.FC<EscapableProps> = ({ onEscape, children }) => {
  React.useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onEscape()
      }
    }

    document.addEventListener('keydown', close)

    return () => document.removeEventListener('keydown', close)
  }, [])

  return <>{children}</>
}

export default Escapable
