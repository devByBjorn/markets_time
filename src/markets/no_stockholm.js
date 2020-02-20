import { Market } from '../mainClass.js'

// STOCKHOLM
const stockholm = new Market('Europe', 'Stockholm', '09:00', '17:30')
stockholm.setHolidays([
  'Jan 1',
  'Jan 6',
  'Apr 10',
  'Apr 13',
  'May 1',
  'May 21',
  'Jun 19',
  'Dec 24',
  'Dec 25',
  'Dec 31',
])
stockholm.setHalfDays(['Apr 9', 'Apr 30', 'May 20', 'Oct 30'])
// stockholm.getCountDown(stockholm.open)
// stockholm.getCountDown(stockholm.close)

export default stockholm