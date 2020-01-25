import React from 'react'
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

const Calendar: React.FC = () => {
  const { state, dispatchers } = useCalendarState()

  return (
    <div className="p-8 flex flex-col justify-center">
      <div className="flex items-center justify-center">
        <h1 className="text-3xl font-bold text-gray-200">Evento</h1>
      </div>
      <div className="flex align-center justify-between mb-4 ">
        <h2 className="text-2xl text-gray-200 font-bold">
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
