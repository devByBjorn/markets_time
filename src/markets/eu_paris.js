import { Market } from '../mainClass.js'

// PARIS
const paris = new Market('Europe', 'Paris', '09:00', '17:30')
paris.setHolidays([
  'Jan 1',
  'Apr 10',
  'Apr 13',
  'May 1',
  'Dec 25',
])
paris.setHalfDays(['Dec 24', 'Dec 31'])
// paris.getCountDown(paris.open)
// paris.getCountDown(paris.close)

export default paris