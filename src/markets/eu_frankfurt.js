import { Market } from '../mainClass.js'

// FRANKFURT
const frankfurt = new Market('Europe', 'Berlin', '09:00', '17:30')
frankfurt.setHolidays([
  'Jan 1',
  'Apr 10',
  'Apr 13',
  'May 1',
  'Jun 1',
  'Dec 24',
  'Dec 25',
  'Dec 31'
])
// frankfurt.getCountDown(frankfurt.open)
// frankfurt.getCountDown(frankfurt.close)

export default frankfurt