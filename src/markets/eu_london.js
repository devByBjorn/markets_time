import { Market } from '../mainClass.js'

// LONDON
const london = new Market('Europe', 'London', '08:00', '16:30')
london.setHolidays([
  'Jan 1',
  'Apr 10',
  'Apr 13',
  'May 8',
  'May 25',
  'Aug 31',
  'Dec 25',
  'Dec 28'
])
london.setHalfDays(['Dec 24', 'Dec 31'])
// london.getCountDown(london.open)
// london.getCountDown(london.close)

export default london 