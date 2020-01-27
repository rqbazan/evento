/* eslint no-param-reassign: 0 */
import immer from 'immer'
import { AppAction, AppActionType, AppState } from '~/types'

const initialState: AppState['remindersBy'] = {}

function addReminder(remindersBy: AppState['remindersBy'], action: AppAction) {
  const { dayKey, reminder } = action.payload

  return immer(remindersBy, draft => {
    const reminders = draft[dayKey] ?? []

    let sortedIndex = 0

    while (sortedIndex < reminders.length) {
      if (reminders[sortedIndex].time > reminder.time) {
        break
      }
      sortedIndex++
    }

    reminders.splice(sortedIndex, 0, reminder)

    draft[dayKey] = reminders
  })
}

function updateReminder(
  remindersBy: AppState['remindersBy'],
  action: AppAction
) {
  const { dayKey, reminder } = action.payload

  return immer(remindersBy, draft => {
    const reminders = draft[dayKey]
    const targetIndex = reminders.findIndex(x => x.id === reminder.id)
    reminders[targetIndex] = reminder
  })
}

function removeReminder(
  remindersBy: AppState['remindersBy'],
  action: AppAction
) {
  const { dayKey, reminderId } = action.payload

  return immer(remindersBy, draft => {
    const reminders = draft[dayKey]
    draft[dayKey] = reminders.filter(x => x.id === reminderId)
  })
}

export default function remindersByReducer(
  remindersBy: AppState['remindersBy'] = initialState,
  action: AppAction
): AppState['remindersBy'] {
  switch (action.type) {
    case AppActionType.ADD_REMINDER: {
      return addReminder(remindersBy, action)
    }
    case AppActionType.UPDATE_REMINDER: {
      return updateReminder(remindersBy, action)
    }
    case AppActionType.REMOVE_REMINDER: {
      return removeReminder(remindersBy, action)
    }
    default: {
      return remindersBy
    }
  }
}
