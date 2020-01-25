export default function getCalendarDates(fullYear: number, month: number) {
  const calendarDates: Date[] = []
  const startIndexDayOfFirstWeek = new Date(fullYear, month).getDay()
  const startIndexDayOfMonth = 1 - startIndexDayOfFirstWeek

  let day = startIndexDayOfMonth

  while (day < 35 - Math.abs(startIndexDayOfMonth)) {
    calendarDates.push(new Date(fullYear, month, day++))
  }

  return calendarDates
}
