import { Market } from '../mainClass'

// SANTIAGO
const santiago = new Market('America', 'Santiago', '09:30', '17:00')
santiago.setHolidays([
  'Jan 1',
  'Apr 10',
  'May 1',
  'May 21',
  'Jun 29',
  'July 16',
  'Sep 18',
  'Oct 12',
  'Dec 8',
  'Dec 25',
])

// santiago.getCountDown(santiago.open)
// santiago.getCountDown(santiago.close)

export default santiago