import { Market } from '../mainClass.js'
// AMSTERDAM
const amsterdam = new Market('Europe', 'Amsterdam', '09:00', '17:40')
amsterdam.setHolidays([
  'Jan 1',
  'Apr 10',
  'Apr 13',
  'May 1',
  'Dec 25',
])
amsterdam.setHalfDays(['Dec 24', 'Dec 31'])
// amsterdam.getCountDown(amsterdam.open)
// amsterdam.getCountDown(amsterdam.close)

export default amsterdam 