import { Market } from '../mainClass.js'

// ZURICH
const zurich = new Market('Europe', 'Zurich', '09:30', '17:00')
zurich.setHolidays([
  'Jan 1',
  'Jan 2',
  'Apr 10',
  'Apr 13',
  'May 1',
  'May 21',
  'Jun 1',
  'Dec 24',
  'Dec 25',
  'Dec 31',
])
// zurich.getCountDown(zurich.open)
// zurich.getCountDown(zurich.close)

export default zurich