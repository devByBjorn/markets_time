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
  closeNav: document.querySelector('.close-slide'),
  openNav: document.querySelectorAll('.open-slide'),
  container: document.querySelector('.container')
}

// Nav when opened
export const openNav = () => {
  // queryDOM.closeNav.style.transform = 'rotate(90deg)'
  queryDOM.nav.style.width = '35rem'
  queryDOM.container.style.paddingLeft = '35rem'
}

// Nav when closed
export const closeNav = () => {
  queryDOM.nav.style.width = '0'
  queryDOM.container.style.paddingLeft = '0rem'
  // queryDOM.closeNav.style.transform = 'rotate(-90deg)'
}




