import { MarketWithLunch } from '../mainClass.js'

// HONG KONG
const hongKong = new MarketWithLunch('Asia', 'Hong_Kong', '09:30', '16:00', '12:00', '13:00')
hongKong.setHolidays([
  'Jan 1',
  'Jan 27',
  'Jan 28',
  'Apr 10',
  'Apr 13',
  'Apr 30',
  'May 1',
  'Jun 25',
  'Jul 1',
  'Oct 1',
  'Oct 2',
  'Oct 26',
  'Dec 25'
])
hongKong.setHalfDays(['Jan 24', 'Dec 24', 'Dec 31'])
// hongKong.getCountDown(hongKong.close)
// hongKong.getCountDown(hongKong.open)

export default hongKong