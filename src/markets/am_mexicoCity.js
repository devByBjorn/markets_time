import { Market } from '../mainClass'

// MEXICO CITY
const mexicoCity = new Market('America', 'Mexico_City', '08:30', '15:00')

mexicoCity.setHolidays([
  'Jan 1',
  'Feb 3',
  'Mar 16',
  'Apr 9',
  'Apr 10',
  'May 1',
  'Sep 16',
  'Nov 2',
  'Nov 16',
  'Dec 12',
  'Dec 25'
])

// // mexicoCity.getCountDown(mexicoCity.open)
// // mexicoCity.getCountDown(mexicoCity.close)

export default mexicoCity