'use strict'
import { fadeIn, removeOverFlow } from './components/animation'
import { closeNav, openNav } from './components/toggleSideNav'
import { currentTime } from './components/currentTime'
import currentYear from './components/currentYear'
// MARKETS
import singapore from './markets/asOc_singapore'
import hongKong from './markets/asOc_hongKong'
import shanghai from './markets/asOc_shanghai'
import seoul from './markets/asOc_seoul'
import tokyo from './markets/asOc_tokyo'
import sydney from './markets/asOc_sydney'

currentYear()
currentTime()

// setInterval(() => {
singapore.statusColor()
hongKong.statusColor()
shanghai.statusColor()
seoul.statusColor()
tokyo.statusColor()
sydney.statusColor()
// }, 1000);


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
        sydney.setSummary()
        break
    }
  })
})


