import moment from 'moment'
// Ticking seconds and 'hide seconds' as textContent when opening page
export const currentTime = () => {
  const time = moment().format('HH:mm:ss')
  document.querySelector('.current-time').innerHTML = `<span>${time}</<span>`
}

export const currentYear = (id) => {
  try {
    const copyYear = new Date().getFullYear();
    document.getElementById(id).innerHTML = `<span>@${copyYear}</<span>`;
  } catch (e) {

  }
}

/* Interval for loader*/
export const loader = () => {
  document.querySelector('.loader-container').style.display = 'none'
}

// DOM acces to navbar
const queryDOM = {
  nav: document.querySelector('#main-nav'),
  container: document.querySelector('.container')
}

// Nav when opened
const openStyle = () => {
  queryDOM.nav.style.width = '35rem'
  queryDOM.container.style.paddingLeft = '35rem'
  // queryDOM.closeNav.style.transform = 'rotate(90deg)'
}

const open = document.querySelector('.open-slide')
export const openNav = open.addEventListener('click', openStyle)


// Nav when closed
const closeStyle = () => {
  queryDOM.nav.style.width = '0'
  queryDOM.container.style.paddingLeft = '0rem'
  // queryDOM.closeNav.style.transform = 'rotate(-90deg)'
}

const close = document.querySelector('.close-slide')
export const closeNav = close.addEventListener('click', closeStyle)




