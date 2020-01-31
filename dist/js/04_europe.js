'use strict'
// EUROPE

// LONDON
const london = new Market('Europe', 'London', '08:00', '16:30')
london.setHolidays([
  'Jan 1',
  'Apr 10',
  'Apr 13',
  'May 8',
  'May 25',
  'Aug 31',
  'Dec 25',
  'Dec 28'
])
london.setHalfDays(['Dec 24', 'Dec 31'])
london.getCountDown(london.open)
london.getCountDown(london.close)

// PARIS
const paris = new Market('Europe', 'Paris', '09:00', '17:30')
paris.setHolidays([
  'Jan 1',
  'Apr 10',
  'Apr 13',
  'May 1',
  'Dec 25',
])
paris.setHalfDays(['Dec 24', 'Dec 31'])
paris.getCountDown(paris.open)
paris.getCountDown(paris.close)

// AMSTERDAM
const amsterdam = new Market('Europe', 'Amsterdam', '09:00', '17:40')
amsterdam.setHolidays([
  'Jan 1',
  'Apr 10',
  'Apr 13',
  'May 1',
  'Dec 25',
])
amsterdam.setHalfDays(['Dec 24', 'Dec 31'])
amsterdam.getCountDown(amsterdam.open)
amsterdam.getCountDown(amsterdam.close)

// BRUSSELS
// const brussels = new Market('Europe', 'Brussels', '09:00', '17:30')
// brussels.setHolidays([
//   'Jan 1',
//   'Apr 10',
//   'Apr 13',
//   'May 1',
//   'Dec 25',
// ])
// brussels.setHalfDays(['Dec 24', 'Dec 31'])
// brussels.getCountDown(brussels.open)
// brussels.getCountDown(brussels.close)

// FRANKFURT
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
frankfurt.getCountDown(frankfurt.open)
frankfurt.getCountDown(frankfurt.close)


// ZURICH
const zurich = new Market('Europe', 'Zurich', '09:30', '17:00')
zurich.setHolidays([
  'Jan 1',
  'Jan 2',
  'Apr 10',
  'Apr 13',
  'May 1',
  'May 21',
  'Jun 1',
  'Dec 24',
  'Dec 25',
  'Dec 31',
])
zurich.getCountDown(zurich.open)
zurich.getCountDown(zurich.close)

// MOSCOW
const moscow = new Market('Europe', 'Moscow', '09:30', '19:00')
moscow.setHolidays([
  'Jan 1',
  'Jan 2',
  'Jan 7',
  'Feb 24',
  'Mar 9',
  'May 1',
  'May 11',
  'Jun 12',
  'Nov 4',
  'Dec 31',
])
moscow.getCountDown(moscow.open)
moscow.getCountDown(moscow.close)

setInterval(() => {
  london.statusColor()
  paris.statusColor()
  amsterdam.statusColor()
  // brussels.statusColor()
  zurich.statusColor()
  frankfurt.statusColor()
  moscow.statusColor()
}, 1000);


const infoBtns = document.querySelectorAll('.info-btn')
infoBtns.forEach((btn) => {
  const marketInfo = [...btn.classList]
  const modal = btn.nextElementSibling

  btn.addEventListener('click', () => {
    modal.style.display = 'block'
    switch (marketInfo[1]) {
      case 'paris':
        paris.setSummary()
        break
      // case 'brussels':
      //   brussels.setSummary()
      //   break
      case 'amsterdam':
        amsterdam.setSummary()
        break
      case 'zurish':
        zurich.setSummary()
        break
      case 'frankfurt':
        frankfurt.setSummary()
        break
      case 'moscow':
        moscow.setSummary()
        break
    }
  })
})