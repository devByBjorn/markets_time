import { Market } from '../mainClass.js'

// COPENHAGEN
const copenhagen = new Market('Europe', 'Copenhagen', '09:00', '17:00')
copenhagen.setHolidays([
  'Jan 1',
  'Apr 9',
  'Apr 10',
  'Apr 13',
  'May 8',
  'May 21',
  'May 22',
  'Jun 1',
  'Jun 5',
  'Dec 24',
  'Dec 25',
  'Dec 31',
])
// copenhagen.getCountDown(copenhagen.open)
// copenhagen.getCountDown(copenhagen.close)

export default copenhagen