import { MarketWithLunch } from '../mainClass.js'

const singapore = new MarketWithLunch('Asia', 'Singapore', '09:00', '17:00', '12:00', '13:00')
singapore.setHolidays([
  'Jan 1',
  'Jan 24',
  'Jan 27',
  'Apr 10',
  'May 1',
  'May 7',
  'May 25',
  'Jul 31',
  'Aug 10',
  'Nov 14',
  'Dec 25',
])
singapore.setHalfDays(['Dec 24', 'Dec 31'])
// singapore.getCountDown(singapore.open)
// singapore.getCountDown(singapore.close)

export default singapore