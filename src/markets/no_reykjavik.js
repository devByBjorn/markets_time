import { Market } from '../mainClass.js'

//REYKJAVIK
const reykjavik = new Market('Atlantic', 'Reykjavik', '09:30', '15:30')
reykjavik.setHolidays([
  'Jan 1',
  'Apr 9',
  'Apr 10',
  'Apr 13',
  'Apr 23',
  'May 1',
  'May 21',
  'Jun 1',
  'Jun 17',
  'Aug 3',
  'Dec 24',
  'Dec 25',
  'Dec 31',
])
reykjavik.setHalfDays(['Dec 24', 'Dec 31'])
// reykjavik.getCountDown(reykjavik.open)
// reykjavik.getCountDown(reykjavik.close)

export default reykjavik