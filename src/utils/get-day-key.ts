import formatDate from 'date-fns/format'

export default function getDayKey(day: Date) {
  return formatDate(day, 'dd/MM/yyyy')
}
