'use strict'
// EURONEXT

// PARIS
const stockholm = new Market('Europe', 'Stockholm', '09:30', '17:30')
stockholm.setHolidays([
  'Jan 1',
  'Apr 10',
  'Apr 13',
  'May 1',
  'Dec 25',
])
stockholm.setHalfDays(['Dec 24', 'Dec 31'])
stockholm.getCountDown(stockholm.open)
stockholm.getCountDown(stockholm.close)

// amsterdam
const copenhagen = new Market('Europe', 'Copenhagen', '09:30', '17:30')
copenhagen.setHolidays([
  'Jan 1',
  'Apr 10',
  'Apr 13',
  'May 1',
  'Dec 25',
])
copenhagen.setHalfDays(['Dec 24', 'Dec 31'])
copenhagen.getCountDown(copenhagen.open)
copenhagen.getCountDown(copenhagen.close)

// helsinki
const helsinki = new Market('Europe', 'Helsinki', '09:30', '17:30')
helsinki.setHolidays([
  'Jan 1',
  'Apr 10',
  'Apr 13',
  'May 1',
  'Dec 25',
])
helsinki.setHalfDays(['Dec 24', 'Dec 31'])
helsinki.getCountDown(helsinki.open)
helsinki.getCountDown(helsinki.close)

// lisbon
const reykjavik = new Market('Atlantic', 'Reykjavik', '09:30', '17:30')
reykjavik.setHolidays([
  'Jan 1',
  'Apr 10',
  'Apr 13',
  'May 1',
  'Dec 25',
])
reykjavik.setHalfDays(['Dec 24', 'Dec 31'])
reykjavik.getCountDown(reykjavik.open)
reykjavik.getCountDown(reykjavik.close)

// PARIS
const riga = new Market('Europe', 'Riga', '09:30', '17:30')
riga.setHolidays([
  'Jan 1',
  'Apr 10',
  'Apr 13',
  'May 1',
  'Dec 25',
])
riga.setHalfDays(['Dec 24', 'Dec 31'])
riga.getCountDown(riga.open)
riga.getCountDown(riga.close)

const tallinn = new Market('Europe', 'Tallinn', '09:00', '16:20')
tallinn.setHolidays([
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
tallinn.setHalfDays(['Apr 8'])
tallinn.getCountDown(tallinn.open)
tallinn.getCountDown(tallinn.close)

const vilnius = new Market('Europe', 'Vilnius', '09:00', '16:20')
vilnius.setHolidays([
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
vilnius.setHalfDays(['Apr 8'])
vilnius.getCountDown(vilnius.open)
vilnius.getCountDown(vilnius.close)


setInterval(() => {
  stockholm.statusColor()
  copenhagen.statusColor()
  helsinki.statusColor()
  reykjavik.statusColor()
  tallinn.statusColor()
  riga.statusColor()
  vilnius.statusColor()
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
      case 'reykjavik':
        reykjavik.setSummary()
        break
      case 'copenhagen':
        copenhagen.setSummary()
        break
      case 'tallin':
        tallinn.setSummary()
        break
      case 'riga':
        riga.setSummary()
        break
      case 'vilnius':
        vilnius.setSummary()
        break
    }
  })
})