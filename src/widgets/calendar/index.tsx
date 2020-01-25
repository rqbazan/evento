import React from 'react'
import isToday from 'date-fns/isToday'
import formatDate from 'date-fns/format'
import Cell from '~/components/cell'
import ColHeader from '~/components/col-header'
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

const Calendar: React.FC = () => {
  const { state, dispatchers } = useCalendarState()

  return (
    <div className="p-8 flex flex-col justify-center">
      <div className="mb-4 flex align-center justify-between">
        <h1 className="text-2xl text-title font-bold">
          {formatDate(state.currentMonth, 'MMMM yyyy')}
        </h1>
        <Navigator
          onPrev={dispatchers.onPrevMonth}
          onToday={dispatchers.onCurrentMonth}
          onNext={dispatchers.onNextMonth}
        />
      </div>
      <div className="flex flex-wrap">
        {dayNames.map(dayName => (
          <div key={dayName} style={{ width: 'calc(100% / 7)' }}>
            <ColHeader>{dayName}</ColHeader>
          </div>
        ))}
        {state.days.map(date => {
          return (
            <div key={date.toISOString()} style={{ width: 'calc(100% / 7)' }}>
              <Cell date={date} isToday={isToday(date)} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Calendar
