import { Market } from '../mainClass.js'

// OSLO
const oslo = new Market('Europe', 'Oslo', '09:00', '16:20')
oslo.setHolidays([
  'Jan 1',
  'Apr 9',
  'Apr 10',
  'Apr 13',
  'May 1',
  'May 17',
  'May 21',
  'Jun 1',
  'Dec 24',
  'Dec 25',
  'Dec 26',
  'Dec 31'
])
oslo.setHalfDays(['Apr 8'])
// oslo.getCountDown(oslo.open)
// oslo.getCountDown(oslo.close)

export default oslo