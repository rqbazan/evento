export default function getCalendarDates(fullYear: number, month: number) {
  const calendarDates: Date[] = []
  const startIndexDayOfFirstWeek = new Date(fullYear, month).getDay()
  const startIndexDayOfMonth = 1 - startIndexDayOfFirstWeek

  let day = startIndexDayOfMonth

  for (let index = 0; index < 35; index++) {
    calendarDates.push(new Date(fullYear, month, day++))
  }

  return calendarDates
}
