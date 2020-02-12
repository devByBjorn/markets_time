import { MarketWithLunch } from '../mainClass.js'

// SHANGHAI
const shanghai = new MarketWithLunch('Asia', 'Shanghai', '09:30', '15:00', '11:30', '13:00')
shanghai.setHolidays([
  'Jan 1',
  'Jan 24',
  'Jan 27',
  'Jan 28',
  'Jan 29',
  'Jan 30',
  'Apr 6',
  'May 1',
  'May 4',
  'May 5',
  'Jun 25',
  'Jun 26',
  'Oct 1',
  'Oct 2',
  'Oct 5',
  'Oct 6',
  'Oct 7',
  'Oct 8',
])
// shanghai.getCountDown(shanghai.close)
// shanghai.getCountDown(shanghai.open)

export default shanghai 