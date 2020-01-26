import React from 'react'
import cs from 'classnames'
import formatDate from 'date-fns/format'
import Cell from '~/components/cell'
import HeaderItem from '~/components/header-item'
import Navigator from '~/components/navigator'
import useCalendarState from './use-state'

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
}

const Calendar: React.FC<CalendarProps> = ({ className }) => {
  const { state, dispatchers } = useCalendarState()

  return (
    <div className={cs('flex flex-col', className)}>
      <div className="flex align-center justify-between mb-4">
        <h2 className="text-2xl text-gray-200 font-medium">
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
        {state.days.map(date => {
          return <Cell key={date.toISOString()} date={date} className="w-1/7" />
        })}
      </div>
    </div>
  )
}

export default Calendar
