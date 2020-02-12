
import { Market } from '../mainClass.js'

//SEOUL
const seoul = new Market('Asia', 'Seoul', '09:00', '15:30')
seoul.setHolidays([
  'Jan 1',
  'Jan 24',
  'Jan 27',
  'Apr 30',
  'May 1',
  'May 5',
  'Sep 30',
  'Oct 1',
  'Oct 2',
  'Oct 9',
  'Dec 25',
  'Dec 31'
])
// seoul.getCountDown(seoul.open)
// seoul.getCountDown(seoul.close)

export default seoul