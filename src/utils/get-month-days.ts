export default function getMonthDays(fullYear: number, month: number) {
  const monthDays: Date[] = []
  const startIndexDayOfFirstWeek = new Date(fullYear, month).getDay()
  const startIndexDayOfMonth = 1 - startIndexDayOfFirstWeek

  let day = startIndexDayOfMonth

  for (let index = 0; index < 35; index++) {
    monthDays.push(new Date(fullYear, month, day++))
  }

  return monthDays
}
