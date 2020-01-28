import React from 'react'
import { useModal } from '~/lib/modal'
import Calendar from '~/widgets/calendar'
import UpsertReminderModal from '~/widgets/upsert-reminder-modal'
import ListRemindersModal from '~/widgets/list-reminders-modal'

export default function IndexPage() {
  const { controller } = useModal()

  return (
    <div className="flex flex-col h-screen items-center">
      <div className="flex h-full max-w-6xl px-4 items-center">
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
