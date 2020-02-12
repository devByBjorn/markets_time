import { Market } from '../mainClass.js'

// HELSINKI
const helsinki = new Market('Europe', 'Helsinki', '10:00', '18:30')
helsinki.setHolidays([
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
// helsinki.getCountDown(helsinki.open)
// helsinki.getCountDown(helsinki.close)

export default helsinki