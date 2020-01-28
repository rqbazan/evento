import React from 'react'
import cs from 'classnames'
import formatDate from 'date-fns/format'
import { connect } from 'react-redux'
import Cell from '~/components/cell'
import HeaderItem from '~/components/header-item'
import Navigator from '~/components/navigator'
import { AppState } from '~/types'
import getDayKey from '~/utils/get-day-key'
import useCalendarState from './use-state'
import ReminderPreview from '~/components/reminder-preview'

const dayNames = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]

export interface CalendarProps {
  className?: string
  remindersBy?: AppState['remindersBy']
  onDayClick(dateKey: string, remindersCount: number): void
}

const Calendar: React.FC<CalendarProps> = ({
  onDayClick,
  className,
  remindersBy
}) => {
  const { state, dispatchers } = useCalendarState()

  return (
    <div className={cs('flex flex-col', className)}>
      <div className="flex align-center justify-between mb-4">
        <h2 className="text-2xl text-gray-900 font-medium">
          {formatDate(state.currentMonth, 'MMMM yyyy')}
        </h2>
        <Navigator
          onPrev={dispatchers.onPrevMonth}
          onToday={dispatchers.onCurrentMonth}
          onNext={dispatchers.onNextMonth}
        />
      </div>
      <div className="flex w-full">
        {dayNames.map(dayName => (
          <HeaderItem key={dayName} className="w-1/7">
            {dayName}
          </HeaderItem>
        ))}
      </div>
      <div className="flex flex-wrap">
        {state.days.map(day => {
          const dayKey = getDayKey(day)
          const remindersCount = remindersBy?.[dayKey]?.length ?? 0

          return (
            <Cell
              key={dayKey}
              className="w-1/7"
              date={day}
              onClick={() => onDayClick(dayKey, remindersCount)}
            >
              {remindersBy?.[dayKey]?.map(reminder => (
                <ReminderPreview
                  className="mb-2 last:mb-0"
                  key={reminder.id}
                  bgColor={reminder.bgColor}
                  description={reminder.description}
                  time={reminder.time}
                />
              ))}
            </Cell>
          )
        })}
      </div>
    </div>
  )
}

function mapStateToProps(state: AppState) {
  return { remindersBy: state.remindersBy }
}

export default connect(mapStateToProps)(Calendar)
