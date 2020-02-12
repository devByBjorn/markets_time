'use strict'
import { closeNav, openNav } from './components/toggleSideNav'
import currentTime from './components/currentTime'
import currentYear from './components/currentYear'
// MARKETS 
import mexicoCity from './markets/am_mexicoCity'
import newYork from './markets/am_newYork'
import toronto from './markets/am_toronto'
import santiago from './markets/am_santiago'
import buenosAires from './markets/am_buenosAires'
import saoPaulo from './markets/am_saoPaolo'

currentYear()
currentTime()

mexicoCity.statusColor()
newYork.statusColor()
toronto.statusColor()
santiago.statusColor()
buenosAires.statusColor()
saoPaulo.statusColor()


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


