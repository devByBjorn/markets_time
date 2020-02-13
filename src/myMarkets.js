import fadeInd from './components/animation'
import elDOM from './components/cityWrapper'
import { Market } from './mainClass.js'
import { closeNav, openNav } from './components/toggleSideNav'
import { currentTime } from './components/currentTime'
import currentYear from './components/currentYear'

currentYear()
currentTime()
// Listen for change in the market selector list to add a market
document.getElementById('market-select').addEventListener('change', (e) => {

  const options = document.querySelectorAll('option')
  const optionsArr = [...options]

  optionsArr.map((option) => {
    if (option.value === e.target.value) {
      const markets = document.getElementById('markets')
      markets.appendChild(elDOM(e.target.value))


      switch (e.target.value) {
        case 'stockholm':
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
          stockholm.statusColor()
          break
        case 'helsinki':
          helsinki.setSummary()
          break
        case 'oslo':
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
          oslo.statusColor()
        case 'copenhagen':
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
          copenhagen.statusColor()

          break
        case 'reykjavik':

          break
      }
    }
  })
})


const infoBtns = document.querySelectorAll('.info-btn')

infoBtns.forEach((btn) => {
  const marketInfo = [...btn.classList]
  console.log('hello')
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
    }
  })
})