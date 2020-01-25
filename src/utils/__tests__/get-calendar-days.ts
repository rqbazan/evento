import isSameDay from 'date-fns/isSameDay'
import getCalendarDays from '../get-calendar-days'

describe('get calendar days', () => {
  it('should generate the days for Januany, 2020', () => {
    const result = getCalendarDays(2020, 0)

    const expected = [
      new Date(2019, 11, 29),
      new Date(2019, 11, 30),
      new Date(2019, 11, 31),
      ...Array.from({ length: 31 }, (_, index) => new Date(2020, 0, index + 1)),
      new Date(2020, 1, 1)
    ]

    for (let index = 0; index < expected.length; index += 1) {
      expect(isSameDay(result[index], expected[index])).toBeTruthy()
    }
  })

  it('should generate the days for March, 2020', () => {
    const result = getCalendarDays(2020, 2)

    const expected = [
      ...Array.from({ length: 31 }, (_, index) => new Date(2020, 2, index + 1)),
      new Date(2020, 3, 1),
      new Date(2020, 3, 2),
      new Date(2020, 3, 3),
      new Date(2020, 3, 4)
    ]

    for (let index = 0; index < expected.length; index += 1) {
      expect(isSameDay(result[index], expected[index])).toBeTruthy()
    }
  })
})
