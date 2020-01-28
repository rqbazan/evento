import React from 'react'
import { useModal } from '~/lib/modal'
import Calendar from '~/widgets/calendar'
import UpsertReminderModal from '~/widgets/upsert-reminder-modal'
import ListRemindersModal from '~/widgets/list-reminders-modal'

export default function IndexPage() {
  const { controller } = useModal()

  return (
    <div className="flex flex-col">
      <header className="text-center py-2 bg-gray-700">
        <h1 className="text-3xl font-bold text-gray-200">Evento</h1>
      </header>
      <div className="m-auto max-w-6xl px-4 mt-4">
        <Calendar
          onDayClick={(dayKey, remindersCount) => {
            if (remindersCount > 0) {
              return controller?.open(ListRemindersModal as any, { dayKey })
            }

            return controller?.open(UpsertReminderModal as any, { dayKey })
          }}
        />
      </div>
    </div>
  )
}
