'use strict'
// Stockholm
const stockholm = new Market('Europe', 'Stockholm', '09:00', '17:30')
stockholm.setHolidays(['2019-10-04', '2019-12-24', '2019-12-25', '2019-12-26'])
stockholm.setHalfDays(['2019-04-18', '2019-04-30', '2019-05-29', '2019-11-01'])

stockholm.contentAndColor()

document.querySelector('#stockholm-info').innerHTML = stockholm.getSummary()

// // New York
const newYork = new Market('America', 'New_York', '09:30', '16:00')
newYork.setHolidays([
  '2019-01-01',
  '2019-01-21',
  '2019-02-18',
  '2019-04-19',
  '2019-05-20',
  '2019-07-01',
  '2019-08-05',
  '2019-09-02',
  '2019-11-28',
  '2019-12-25'
])
newYork.setHalfDays(['2019-11-29', '2019-12-24'])
newYork.contentAndColor()
document.querySelector('#new-york-info').innerHTML = newYork.getSummary()

// // London
const london = new Market('Europe', 'London', '08:00', '16:30')
london.setHolidays([
  '2019-01-01',
  '2019-01-21',
  '2019-02-18',
  '2019-04-19',
  '2019-05-20',
  '2019-07-01',
  '2019-08-05',
  '2019-09-02',
  '2019-11-28',
  '2019-12-25'
])
london.setHalfDays(['2019-11-29', '2019-12-24'])
london.contentAndColor()
document.querySelector('#london-info').innerHTML = london.getSummary()


// // Frankfurt
const frankfurt = new Market('Europe', 'Berlin', '09:00', '17:35')
frankfurt.setHolidays([
  '2019-01-01',
  '2019-01-21',
  '2019-02-18',
  '2019-04-19',
  '2019-05-20',
  '2019-07-01',
  '2019-08-05',
  '2019-09-02',
  '2019-11-28',
  '2019-12-25'
])
frankfurt.setHalfDays(['2019-11-29', '2019-12-24'])
frankfurt.contentAndColor()
document.querySelector('#frankfurt-info').innerHTML = frankfurt.getSummary()

// // Tokyo
const tokyo = new MarketWithLunch('Asia', 'Tokyo', '09:00', '15:00', '11:30', '12:30')
tokyo.setHolidays([
  '2019-01-21',
  '2019-01-01',
  '2019-04-19',
  '2019-02-18',
  '2019-07-01',
  '2019-05-20',
  '2019-09-02',
  '2019-08-05',
  '2019-12-25',
  '2019-11-28'
])

tokyo.contentAndColor()
document.querySelector('#tokyo-info').innerHTML = tokyo.getSummary()


// // Hong Kong
const hongkong = new MarketWithLunch('Asia', 'Hong_Kong', '09:00', '16:00', '12:00', '13:00')
hongkong.setHolidays([
  '2019-01-01',
  '2019-01-21',
  '2019-02-18',
  '2019-04-19',
  '2019-05-20',
  '2019-07-01',
  '2019-08-05',
  '2019-09-02',
  '2019-11-28',
  '2019-12-25'
])

hongkong.contentAndColor()
hongkong.closedLunch()
document.querySelector('#hong-kong-info').innerHTML = hongkong.getSummary()




