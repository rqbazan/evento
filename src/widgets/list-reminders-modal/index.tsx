import React from 'react'
import { connect } from 'react-redux'
import { Controller as ModalController } from '~/lib/modal'
import Button from '~/components/button'
import * as actionCreators from '~/store/action-creators'
import { AppState, Reminder } from '~/types'
import Icon from '~/components/icon'
import ReminderPreview from '~/components/reminder-preview'
import UpsertReminderModal from '~/widgets/upsert-reminder-modal'

interface ListRemindersModalProps {
  dayKey: string
  reminders: Reminder[]
  controller: ModalController
  removeReminder: typeof actionCreators.removeReminder
}

const ListRemindersModal: React.FC<ListRemindersModalProps> = ({
  dayKey,
  reminders,
  controller,
  removeReminder
}) => {
  return (
    <div className="flex flex-col" style={{ width: 300 }}>
      <h3 className="text-lg font-medium mb-6">Reminders</h3>
      <div className="flex flex-col">
        {reminders.length === 0 && (
          <div className="flex items-center justify-center text-sm py-4">
            No items to show
          </div>
        )}
        {reminders.map(reminder => (
          <div key={reminder.id} className="flex mb-2 items-center last:mb-0">
            <div
              className="mr-2 h-6 w-6"
              role="button"
              tabIndex={0}
              onClick={() => removeReminder(dayKey, reminder.id)}
              onKeyPress={() => removeReminder(dayKey, reminder.id)}
            >
              <Icon name="trash" className="fill-current text-red-700" />
            </div>
            <ReminderPreview
              className="cursor-pointer flex-1"
              onClick={() =>
                controller.open(UpsertReminderModal as any, {
                  dayKey,
                  reminder
                })
              }
              {...reminder}
            />
          </div>
        ))}
        <Button
          type="submit"
          className="mt-4 ml-auto"
          onClick={() =>
            controller.open(UpsertReminderModal as any, { dayKey })
          }
        >
          New Reminder
        </Button>
      </div>
    </div>
  )
}

function mapStateToProps(state: AppState, { dayKey }: ListRemindersModalProps) {
  return {
    reminders: state.remindersBy[dayKey]
  }
}

export default connect(mapStateToProps, {
  removeReminder: actionCreators.removeReminder
})(ListRemindersModal)
