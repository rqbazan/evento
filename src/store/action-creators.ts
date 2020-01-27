import { AppActionType, Reminder } from '~/types'

export const addReminder = (dayKey: string, reminder: Reminder) => {
  return { type: AppActionType.ADD_REMINDER, payload: { dayKey, reminder } }
}

export const updateReminder = (dayKey: string, reminder: Reminder) => {
  return { type: AppActionType.UPDATE_REMINDER, payload: { dayKey, reminder } }
}

export const removeReminder = (dayKey: string, reminderId: string) => {
  return {
    type: AppActionType.REMOVE_REMINDER,
    payload: { dayKey, reminderId }
  }
}
