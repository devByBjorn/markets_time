'use strict'

import Market from './mainClass.js'
import { currentTime, loader, openNav, closeNav } from './utils.js'

setInterval(currentTime, 1000)
setInterval(loader, 1500)


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
  'Nov 26',
  'Dec 25'
])
newYork.setHalfDays(['Nov 27', 'Dec 24'])
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
const santiago = new Market('America', 'Santiago', '09:30', '17:00')
santiago.setHolidays([
  'Jan 1',
  'Apr 10',
  'May 1',
  'May 21',
  'Jun 29',
  'July 16',
  'Sep 18',
  'Oct 12',
  'Dec 8',
  'Dec 25',
])

santiago.getCountDown(santiago.open)
santiago.getCountDown(santiago.close)

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
buenosAires.getCountDown(buenosAires.close)
buenosAires.getCountDown(buenosAires.open)

// SAO PAULO
const saoPaulo = new Market('America', 'Sao_Paulo', '10:00', '17:55')
saoPaulo.setHolidays([
  'Jan 1',
  'Feb 24',
  'Feb 25',
  'Feb 26',
  'Aps 10',
  'Apr 21',
  'May 1',
  'Jun 11',
  'Jul 9',
  'Sep 7',
  'Oct 12',
  'Nov 2',
  'Nov 20',
  'Dec 24',
  'Dec 25',
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
      case 'buenos-aires':
        buenosAires.setSummary()
        break
      case 'sao-paulo':
        saoPaulo.setSummary()
        break
    }
  })
})


