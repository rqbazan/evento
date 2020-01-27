import getDayKey from '../get-day-key'

describe('get day key', () => {
  it('should return a string key for the given date', () => {
    const result = getDayKey(new Date(2020, 0, 1))
    expect(result).toBe('01/01/2020')
  })
})
