import React from 'react'
import isToday from 'date-fns/isToday'
import Cell from '~/components/cell'
import ColHeader from '~/components/col-header'
import Navigator from '~/components/navigator'
import getCalendarDays from '~/utils/get-calendar-dates'

const dayNames = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]

export default function IndexPage() {
  const now = new Date()
  const calendarDates = getCalendarDays(now.getFullYear(), now.getMonth())

  return (
    <div className="p-8 flex flex-col justify-center">
      <div className="mb-4 flex align-center justify-between">
        <h1 className="text-2xl text-title font-bold">January 2020</h1>
        <Navigator
          onNext={() => null}
          onPrev={() => null}
          onToday={() => null}
        />
      </div>
      <div className="flex flex-wrap">
        {dayNames.map(dayName => (
          <div key={dayName} style={{ width: 'calc(100% / 7)' }}>
            <ColHeader>{dayName}</ColHeader>
          </div>
        ))}
        {calendarDates.map(date => {
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
