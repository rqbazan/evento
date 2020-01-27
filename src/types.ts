export enum AppActionType {
  ADD_REMINDER = 'reminders/add',
  UPDATE_REMINDER = 'reminders/update',
  REMOVE_REMINDER = 'reminders/remove'
}

export interface AppAction {
  type: AppActionType
  payload: any
}

export interface Reminder {
  id: string
  description: string
  bgColor: string
  time: string
  location: string
}

export interface AppState {
  remindersBy: {
    [day: string]: Reminder[]
  }
}
