'use strict'
// THE NORDICS
import { fadeIn, removeOverFlow } from './components/animation'
import { closeNav, openNav } from './components/toggleSideNav'
import { currentTime } from './components/currentTime'
import currentYear from './components/currentYear'
// MARKETS
import reykjavik from './markets/no_reykjavik'
import oslo from './markets/no_oslo'
import copenhagen from './markets/no_copenhagen'
import stockholm from './markets/no_stockholm'
import helsinki from './markets/no_helsinki'

currentYear()
currentTime()

// setInterval(() => {
stockholm.statusColor()
copenhagen.statusColor()
helsinki.statusColor()
oslo.statusColor()
reykjavik.statusColor()
// }, 1000);

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