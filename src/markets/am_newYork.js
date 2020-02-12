import { Market } from '../mainClass'

// NEW YORK
const newYork = new Market('America', 'New_York', '09:30', '16:00')

newYork.setHolidays([
  'Jan 1',
  'Jan 20',
  'Feb 17',
  'Apr 10',
  'May 25',
  'Jul 3',
  'Sep 7',
  'Nov 26',
  'Dec 25'
])

newYork.setHalfDays(['Nov 27', 'Dec 24'])

// newYork.getCountDown(newYork.open)
// newYork.getCountDown(newYork.close)
export default newYork