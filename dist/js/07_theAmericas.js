'use strict'

// MEXICO CITY
const mexicoCity = new Market('America', 'Mexico_City', '08:00', '16:30')
mexicoCity.setHolidays([
  'Jan 1',
  'Apr 10',
  'Apr 13',
  'May 4',
  'May 25',
  'Aug 31',
  'Dec 25',
  'Dec 28'
])
mexicoCity.setHalfDays(['Dec 24', 'Dec 31'])
mexicoCity.getCountDown(mexicoCity.open)
mexicoCity.getCountDown(mexicoCity.close)

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
newYork.getCountDown(newYork.open)
newYork.getCountDown(newYork.close)

// STOCKHOLM
const toronto = new Market('America', 'Toronto', '09:30', '16:00')
toronto.setHolidays([
  'Jan 1',
  'Feb 17',
  'Apr 10',
  'May 18',
  'Jul 1',
  'Aug 3',
  'Sep 7',
  'Oct 12',
  'Dec 25',
  'Dec 28'])
toronto.setHalfDays(['Dec 24'])
toronto.getCountDown(toronto.close)
toronto.getCountDown(toronto.open)

// SANTIAGO
const santiago = new Market('America', 'Santiago', '09:00', '17:30')
santiago.setHolidays([
  'Jan 1',
  'Apr 10',
  'Apr 13',
  'May 1',
  'Jun 1',
  'Dec 24',
  'Dec 25',
  'Dec 31'
])

santiago.getCountDown(santiago.open)
santiago.getCountDown(santiago.close)

// // HONG KONG
const buenosAires = new MarketWithLunch('America', 'Buenos_Aires', '09:30', '16:00', '12:00', '13:00')
buenosAires.setHolidays([
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
buenosAires.setHalfDays(['Dec 24', 'Dec 31'])
buenosAires.getCountDown(buenosAires.close)
buenosAires.getCountDown(buenosAires.open)

// // TOKYO
const saoPaulo = new MarketWithLunch('America', 'Sao_Paulo', '09:00', '15:00', '11:30', '12:30')
saoPaulo.setHolidays([
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

saoPaulo.getCountDown(saoPaulo.close)
saoPaulo.getCountDown(saoPaulo.open)


setInterval(() => {
  newYork.statusColor()
  toronto.statusColor()
  mexicoCity.statusColor()
  santiago.statusColor()
  buenosAires.statusColor()
  saoPaulo.statusColor()
}, 1000);


// This solution creates more line of code, but the solution
// of calling city.openCloseModal when script loads seems even 
// worse. Since teh functions are getting invoked before the user 
// clicks an info-button takes up memory 
const infoBtns = document.querySelectorAll('.info-btn')
infoBtns.forEach((btn) => {
  const marketInfo = [...btn.classList]
  const modal = btn.nextElementSibling

  btn.addEventListener('click', () => {
    modal.style.display = 'block'
    switch (marketInfo[1]) {
      case 'new-york':
        newYork.setSummary()
        break
      case 'toronto':
        toronto.setSummary()
        break
      case 'mexico-city':
        mexicoCity.setSummary()
        break
      case 'santiago':
        santiago.setSummary()
        break
      case 'hong-kong':
        hongKong.setSummary()
        break
      case 'tokyo':
        tokyo.setSummary()
        break
    }
  })
})


