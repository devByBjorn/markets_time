'use strict'
import { removeOverFlow } from './components/animation'
import { closeNav, openNav } from './components/toggleSideNav'
import currentTime from './components/currentTime'
import currentYear from './components/currentYear'
// MARKETS
import newYork from './markets/am_newYork'
import toronto from './markets/am_toronto'
import london from './markets/eu_london'
import frankfurt from './markets/eu_frankfurt'
import hongKong from './markets/asOc_hongKong'
import tokyo from './markets/asOc_tokyo'

currentYear()
currentTime()


newYork.statusColor()
toronto.statusColor()
london.statusColor()
frankfurt.statusColor()
hongKong.statusColor()
tokyo.statusColor()


// INFO BTN - TRIGGER MODALS
const infoBtns = document.querySelectorAll('.info-btn')
infoBtns.forEach((btn) => {
  const marketInfo = [...btn.classList]
  const modal = btn.nextElementSibling

  btn.addEventListener('click', () => {
    modal.style.display = 'flex'
    switch (marketInfo[1]) {
      case 'new-york':
        newYork.setSummary()
        break
      case 'toronto':
        toronto.setSummary()
        break
      case 'london':
        london.setSummary()
        break
      case 'frankfurt':
        frankfurt.setSummary()
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


