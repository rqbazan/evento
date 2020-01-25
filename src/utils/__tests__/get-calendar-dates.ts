import isSameDay from 'date-fns/isSameDay'
import getCalendarDates from '../get-calendar-dates'

describe('get calendar dates', () => {
  it('should generate the dates of given month', () => {
    const result = getCalendarDates(2020, 0)

    const expected = [
      new Date(2019, 11, 29),
      new Date(2019, 11, 30),
      new Date(2019, 11, 31),
      ...Array.from({ length: 31 }, (_, index) => new Date(2020, 0, index + 1)),
      new Date(2020, 1, 1)
    ]

    for (let index = 0; index < result.length; index += 1) {
      expect(isSameDay(result[index], expected[index])).toBeTruthy()
    }
  })
})
