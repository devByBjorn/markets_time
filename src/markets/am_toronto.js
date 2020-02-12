import { Market } from '../mainClass'

// TORONTO
const toronto = new Market('America', 'Toronto', '09:30', '16:00')

toronto.setHolidays([
  'Jan 1',
  'Feb 17',
  'Apr 10',
  'May 18',
  'Jul 1',
  'Aug 3',
  'Sep 7',
  'Oct 12',
  'Dec 25',
  'Dec 28'])

toronto.setHalfDays(['Dec 24'])
// toronto.getCountDown(toronto.close)
// toronto.getCountDown(toronto.open)

export default toronto