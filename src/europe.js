'use strict'
// EUROPE
import removeOverFlow from './components/animation'
import { closeNav, openNav } from './components/toggleSideNav'
import { currentTime } from './components/currentTime'
import currentYear from './components/currentYear'
// MARKETS 
import london from './markets/eu_london'
import paris from './markets/eu_paris'
import amsterdam from './markets/eu_amsterdam'
import frankfurt from './markets/eu_frankfurt'
import zurich from './markets/eu_zurich'
import moscow from './markets/eu_moscow'

currentYear()
currentTime()

// setInterval(() => {
london.statusColor()
paris.statusColor()
amsterdam.statusColor()
// brussels.statusColor()
zurich.statusColor()
frankfurt.statusColor()
moscow.statusColor()
// }, 1000);


const infoBtns = document.querySelectorAll('.info-btn')
infoBtns.forEach((btn) => {
  const marketInfo = [...btn.classList]
  const modal = btn.nextElementSibling

  btn.addEventListener('click', () => {
    modal.style.display = 'flex'

    switch (marketInfo[1]) {
      case 'london':
        london.setSummary()
        break
      case 'paris':
        paris.setSummary()
        break
      // case 'brussels':
      //   brussels.setSummary()
      //   break
      case 'amsterdam':
        amsterdam.setSummary()
        break
      case 'zurich':
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