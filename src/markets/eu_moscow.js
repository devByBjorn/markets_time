import { Market } from '../mainClass.js'

// MOSCOW
const moscow = new Market('Europe', 'Moscow', '09:30', '19:00')
moscow.setHolidays([
  'Jan 1',
  'Jan 2',
  'Jan 7',
  'Feb 24',
  'Mar 9',
  'May 1',
  'May 11',
  'Jun 12',
  'Nov 4',
  'Dec 31',
])
// moscow.getCountDown(moscow.open)
// moscow.getCountDown(moscow.close)

export default moscow