import React from 'react'
import Calendar from '~/widgets/calendar'

export default function IndexPage() {
  return (
    <div className="flex flex-col">
      <header className="text-center py-2 bg-gray-700">
        <h1 className="text-3xl font-bold text-gray-200">Evento</h1>
      </header>
      <div className="m-auto max-w-6xl px-4 mt-4">
        <Calendar />
      </div>
    </div>
  )
}
