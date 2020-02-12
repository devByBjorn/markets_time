import { Market } from '../mainClass'

// BUENOS AIRES
const buenosAires = new Market('America', 'Buenos_Aires', '11:00', '17:00')
buenosAires.setHolidays([
  'Jan 1',
  'Feb 24',
  'Feb 25',
  'Mar 23',
  'Mar 24',
  'Apr 2',
  'Apr 9',
  'Apr 10',
  'May 1',
  'May 25',
  'Jun 15',
  'Jul 9',
  'Jul 10',
  'Oct 12',
  'Nov 23',
  'Dec 7',
  'Dec 8',
  'Dec 25'
])
// buenosAires.getCountDown(buenosAires.close)
// buenosAires.getCountDown(buenosAires.open)

export default buenosAires