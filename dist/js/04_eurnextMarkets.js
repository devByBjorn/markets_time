'use strict'
// EURONEXT

// PARIS
const paris = new Market('Europe', 'Paris', '09:30', '17:30')
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

// amsterdam
const amsterdam = new Market('Europe', 'Amsterdam', '09:30', '17:30')
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

// brussels
const brussels = new Market('Europe', 'Brussels', '09:30', '17:30')
brussels.setHolidays([
  'Jan 1',
  'Apr 10',
  'Apr 13',
  'May 1',
  'Dec 25',
])
brussels.setHalfDays(['Dec 24', 'Dec 31'])
brussels.getCountDown(brussels.open)
brussels.getCountDown(brussels.close)

// lisbon
const lisbon = new Market('Europe', 'Lisbon', '09:30', '17:30')
lisbon.setHolidays([
  'Jan 1',
  'Apr 10',
  'Apr 13',
  'May 1',
  'Dec 25',
])
lisbon.setHalfDays(['Dec 24', 'Dec 31'])
lisbon.getCountDown(lisbon.open)
lisbon.getCountDown(lisbon.close)

// PARIS
const dublin = new Market('Europe', 'Dublin', '09:30', '17:30')
dublin.setHolidays([
  'Jan 1',
  'Apr 10',
  'Apr 13',
  'May 1',
  'Dec 25',
])
dublin.setHalfDays(['Dec 24', 'Dec 31'])
dublin.getCountDown(dublin.open)
dublin.getCountDown(dublin.close)

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


setInterval(() => {
  paris.statusColor()
  amsterdam.statusColor()
  brussels.statusColor()
  lisbon.statusColor()
  dublin.statusColor()
  oslo.statusColor()
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
      case 'brussels':
        brussels.setSummary()
        break
      case 'lisbon':
        lisbon.setSummary()
        break
      case 'amsterdam':
        amsterdam.setSummary()
        break
      case 'dublin':
        dublin.setSummary()
        break
      case 'oslo':
        oslo.setSummary()
        break
    }
  })
})