import React from 'react'
import addMonths from 'date-fns/addMonths'
import getCalendarDays from '~/utils/get-calendar-days'

export enum ActionType {
  NEXT_MONTH,
  PREV_MONTH,
  CURRENT_MONTH
}

export interface Action {
  type: ActionType
  payload?: any
}

export interface CalendarState {
  currentMonth: Date
  days: Date[]
}

function initState(initDate: Date): CalendarState {
  return {
    currentMonth: initDate,
    days: getCalendarDays(initDate.getFullYear(), initDate.getMonth())
  }
}

function reducer(state: CalendarState, action: Action) {
  switch (action.type) {
    case ActionType.NEXT_MONTH: {
      return initState(addMonths(state.currentMonth, 1))
    }
    case ActionType.PREV_MONTH: {
      return initState(addMonths(state.currentMonth, -1))
    }
    case ActionType.CURRENT_MONTH: {
      return initState(new Date())
    }
    default: {
      return state
    }
  }
}

export default function useCalendarState() {
  const [state, dispatch] = React.useReducer<typeof reducer, Date>(
    reducer,
    new Date(),
    initState
  )

  const dispatchers = {
    onNextMonth: () => dispatch({ type: ActionType.NEXT_MONTH }),
    onPrevMonth: () => dispatch({ type: ActionType.PREV_MONTH }),
    onCurrentMonth: () => dispatch({ type: ActionType.CURRENT_MONTH })
  }

  return { state, dispatchers }
}
