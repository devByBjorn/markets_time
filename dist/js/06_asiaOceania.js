'use strict'

//SINGAPORE
const singapore = new Market('Asia', 'Singapore', '09:30', '16:00')
singapore.setHolidays([
  'Jan 1',
  'Jan 20',
  'Feb 17',
  'Apr 10',
  'May 25',
  'Jul 3',
  'Sep 7',
])
singapore.setHalfDays(['Nov 26', 'Dec 24'])
singapore.getCountDown(singapore.open)
singapore.getCountDown(singapore.close)

//HONG KONG
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
hongKong.getCountDown(hongKong.close)
hongKong.getCountDown(hongKong.open)


// SHANGHAI
const shanghai = new MarketWithLunch('Asia', 'Shanghai', '09:30', '15:00', '11:30', '13:00')
shanghai.setHolidays([
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
shanghai.setHalfDays(['Dec 24', 'Dec 31'])
shanghai.getCountDown(shanghai.close)
shanghai.getCountDown(shanghai.open)

//SEOUL
const seoul = new Market('Asia', 'Seoul', '09:00', '15:30')
seoul.setHolidays([
  'Jan 1',
  'Jan 24',
  'Jan 27',
  'Apr 10',
  'Apr 30',
  'May 1',
  'May 5',
  'Sep 30',
  'Oct 1',
  'Oct 2',
  'Oct 9',
  'Dec 25',
  'Dec 31'
])

seoul.getCountDown(seoul.open)
seoul.getCountDown(seoul.close)

//TOKYO
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

tokyo.getCountDown(tokyo.close)
tokyo.getCountDown(tokyo.open)


//SYDNEY
const sydney = new Market('Australia', 'Sydney', '08:00', '16:30')
sydney.setHolidays([
  'Jan 1',
  'Apr 10',
  'Apr 13',
  'May 4',
  'May 25',
  'Aug 31',
  'Dec 25',
  'Dec 28'
])
sydney.setHalfDays(['Dec 24', 'Dec 31'])
sydney.getCountDown(sydney.open)
sydney.getCountDown(sydney.close)

setInterval(() => {
  singapore.statusColor()
  hongKong.statusColor()
  shanghai.statusColor()
  seoul.statusColor()
  tokyo.statusColor()
  sydney.statusColor()
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
      case 'singapore':
        singapore.setSummary()
        break
      case 'hong-kong':
        hongKong.setSummary()
        break
      case 'shanghai':
        shanghai.setSummary()
        break
      case 'seoul':
        seoul.setSummary()
        break
      case 'tokyo':
        tokyo.setSummary()
        break
      case 'sydney':
        sydeny.setSummary()
        break
    }
  })
})


