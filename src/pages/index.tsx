import React from 'react'
import { useModal } from '~/lib/modal'
import Calendar from '~/widgets/calendar'
import UpsertReminderModal from '~/widgets/upsert-reminder-modal'
import getDayKey from '~/utils/get-day-key'

export default function IndexPage() {
  const { controller } = useModal()

  return (
    <div className="flex flex-col">
      <header className="text-center py-2 bg-gray-700">
        <h1 className="text-3xl font-bold text-gray-200">Evento</h1>
      </header>
      <div className="m-auto max-w-6xl px-4 mt-4">
        <Calendar
          onDayClick={day =>
            controller?.open(UpsertReminderModal as any, {
              dayKey: getDayKey(day)
            })
          }
        />
      </div>
    </div>
  )
}
