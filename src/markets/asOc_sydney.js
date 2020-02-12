import { Market } from '../mainClass.js'

//SYDNEY
const sydney = new Market('Australia', 'Sydney', '10:00', '16:00')
sydney.setHolidays([
  'Jan 1',
  'Jan 27',
  'Apr 10',
  'Apr 13',
  'Jun 8',
  'Dec 25',
  'Dec 28'
])
sydney.setHalfDays(['Dec 24', 'Dec 31'])
// sydney.getCountDown(sydney.open)
// sydney.getCountDown(sydney.close)

export default sydney