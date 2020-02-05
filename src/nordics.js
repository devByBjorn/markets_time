'use strict'
// THE NORDICS
import { Market } from './mainClass.js'
import { currentTime, loader, currentYear, openNav, closeNav } from './utils.js'

currentYear()
setInterval(currentTime, 1000)
setInterval(loader, 1200)


//REYKJAVIK
const reykjavik = new Market('Atlantic', 'Reykjavik', '09:30', '15:30')
reykjavik.setHolidays([
  'Jan 1',
  'Apr 9',
  'Apr 10',
  'Apr 13',
  'Apr 23',
  'May 1',
  'May 21',
  'Jun 1',
  'Jun 17',
  'Aug 3',
  'Dec 24',
  'Dec 25',
  'Dec 31',
])
reykjavik.setHalfDays(['Dec 24', 'Dec 31'])
reykjavik.getCountDown(reykjavik.open)
reykjavik.getCountDown(reykjavik.close)

// OSLO
const oslo = new Market('Europe', 'Oslo', '09:00', '16:20')
oslo.setHolidays([
  'Jan 1',
  'Apr 9',
  'Apr 10',
  'Apr 13',
  'May 1',
  'May 17',
  'May 21',
  'Jun 1',
  'Dec 24',
  'Dec 25',
  'Dec 26',
  'Dec 31'
])
oslo.setHalfDays(['Apr 8'])
oslo.getCountDown(oslo.open)
oslo.getCountDown(oslo.close)

// COPENHAGEN
const copenhagen = new Market('Europe', 'Copenhagen', '09:00', '17:00')
copenhagen.setHolidays([
  'Jan 1',
  'Apr 9',
  'Apr 10',
  'Apr 13',
  'May 8',
  'May 21',
  'May 22',
  'Jun 1',
  'Jun 5',
  'Dec 24',
  'Dec 25',
  'Dec 31',
])
copenhagen.getCountDown(copenhagen.open)
copenhagen.getCountDown(copenhagen.close)

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
  'Dec 31',
])
stockholm.setHalfDays(['Apr 9', 'Apr 30', 'May 20', 'Oct 30'])
stockholm.getCountDown(stockholm.open)
stockholm.getCountDown(stockholm.close)

// HELSINKI
const helsinki = new Market('Europe', 'Helsinki', '10:00', '18:30')
helsinki.setHolidays([
  'Jan 1',
  'Jan 6',
  'Apr 10',
  'Apr 13',
  'May 1',
  'May 21',
  'Jun 19',
  'Dec 24',
  'Dec 25',
  'Dec 31',
])
helsinki.getCountDown(helsinki.open)
helsinki.getCountDown(helsinki.close)


// const riga = new Market('Europe', 'Riga', '09:30', '17:30')
// riga.setHolidays([
//   'Jan 1',
//   'Apr 10',
//   'Apr 13',
//   'May 1',
//   'Dec 25',
// ])
// riga.setHalfDays(['Dec 24', 'Dec 31'])
// riga.getCountDown(riga.open)
// riga.getCountDown(riga.close)

// const tallinn = new Market('Europe', 'Tallinn', '09:00', '16:20')
// tallinn.setHolidays([
//   'Jan 1',
//   'Apr 9',
//   'Apr 10',
//   'Apr 13',
//   'May 1',
//   'May 17',
//   'May 21',
//   'Jun 1',
//   'Dec 24',
//   'Dec 25',
//   'Dec 26',
//   'Dec 31'
// ])
// tallinn.setHalfDays(['Apr 8'])
// tallinn.getCountDown(tallinn.open)
// tallinn.getCountDown(tallinn.close)

// const vilnius = new Market('Europe', 'Vilnius', '09:00', '16:20')
// vilnius.setHolidays([
//   'Jan 1',
//   'Apr 9',
//   'Apr 10',
//   'Apr 13',
//   'May 1',
//   'May 17',
//   'May 21',
//   'Jun 1',
//   'Dec 24',
//   'Dec 25',
//   'Dec 26',
//   'Dec 31'
// ])
// vilnius.setHalfDays(['Apr 8'])
// vilnius.getCountDown(vilnius.open)
// vilnius.getCountDown(vilnius.close)


setInterval(() => {
  stockholm.statusColor()
  copenhagen.statusColor()
  helsinki.statusColor()
  oslo.statusColor()
  reykjavik.statusColor()
  // tallinn.statusColor()
  // riga.statusColor()
  // vilnius.statusColor()
}, 1000);


const infoBtns = document.querySelectorAll('.info-btn')
infoBtns.forEach((btn) => {
  const marketInfo = [...btn.classList]
  const modal = btn.nextElementSibling

  btn.addEventListener('click', () => {
    modal.style.display = 'block'
    switch (marketInfo[1]) {
      case 'stockholm':
        stockholm.setSummary()
        break
      case 'helsinki':
        helsinki.setSummary()
        break
      case 'oslo':
        oslo.setSummary()
      case 'copenhagen':
        copenhagen.setSummary()
        break
      case 'reykjavik':
        reykjavik.setSummary()
        break
      // case 'tallin':
      //   tallinn.setSummary()
      //   break
      // case 'riga':
      //   riga.setSummary()
      //   break
      // case 'vilnius':
      //   vilnius.setSummary()
      //   break
    }
  })
})