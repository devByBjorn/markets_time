'use strict'
// NEW YORK
const newYork = new Market('America', 'New_York', '09:30', '16:00')
newYork.setHolidays([
  'Jan 1',
  'Jan 20',
  'Feb 17',
  'Apr 10',
  'May 25',
  'Jul 3',
  'Sep 7',
])
newYork.setHalfDays(['Nov 26', 'Dec 24'])
newYork.openCLoseModal()
newYork.getCountDown(newYork.open)
newYork.getCountDown(newYork.close)


// STOCKHOLM
const stockholm = new Market('Europe', 'Stockholm', '09:00', '17:30')
stockholm.setHolidays([
  'Jan 1',
  'Jan 6',
  'Apr 10',
  'Apr 13',
  'May 1',
  'May 21',
  'Jun 19',
  'Dec 24',
  'Dec 25',
  'Dec 31'])
stockholm.setHalfDays(['Apr 9', 'Apr 30', 'May 20', 'Oct 30'])
stockholm.openCLoseModal()
stockholm.getCountDown(stockholm.close)
stockholm.getCountDown(stockholm.open)


// // LONDON
const london = new Market('Europe', 'London', '08:00', '16:30')
london.setHolidays([
  'Jan 1',
  'Apr 10',
  'Apr 13',
  'May 4',
  'May 25',
  'Aug 31',
  'Dec 25',
  'Dec 28'
])
london.setHalfDays(['Dec 24', 'Dec 31'])
london.openCLoseModal()
london.getCountDown(london.open)
london.getCountDown(london.close)



// // FRANKFURT
const frankfurt = new Market('Europe', 'Berlin', '09:00', '17:30')
frankfurt.setHolidays([
  'Jan 1',
  'Apr 10',
  'Apr 13',
  'May 1',
  'Jun 1',
  'Dec 24',
  'Dec 25',
  'Dec 31'
])
frankfurt.openCLoseModal()
frankfurt.getCountDown(frankfurt.open)
frankfurt.getCountDown(frankfurt.close)


// // HONG KONG
const hongKong = new MarketWithLunch('Asia', 'Hong_Kong', '09:30', '16:00', '12:00', '13:00')
hongKong.setHolidays([
  'Jan 1',
  'Jan 24',
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
hongKong.setHalfDays(['Dec 24', 'Dec 31'])
hongKong.openCLoseModal()
hongKong.getCountDown(hongKong.close)
hongKong.getCountDown(hongKong.open)



// // TOKYO
const tokyo = new MarketWithLunch('Asia', 'Tokyo', '09:00', '15:00', '11:30', '12:30')
tokyo.setHolidays([
  'Jan 1',
  'Jan 2',
  'Jan 3',
  'Jan 13',
  'Feb 11',
  'Feb 24',
  'Mar 20',
  'Apr 29',
  'May 4',
  'May 5',
  'May 6',
  'Jul 23',
  'Jul 24',
  'Aug 10',
  'Sep 21',
  'Sep 22',
  'Nov 3',
  'Nov 23',
  'Dec 31'
])
tokyo.openCLoseModal()
tokyo.getCountDown(tokyo.close)
tokyo.getCountDown(tokyo.open)


setInterval(() => {
  newYork.statusColor()
  stockholm.statusColor()
  london.statusColor()
  frankfurt.statusColor()
  hongKong.statusColor()
  tokyo.statusColor()
}, 1000);





