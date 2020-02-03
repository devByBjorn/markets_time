// Ticking seconds and 'hide seconds' as textContent when opening page
(function currentTime() {
  const time = moment().format('HH:mm:ss')

  document.querySelector('.current-time').innerHTML = `<span>${time}</<span>`
  setTimeout(currentTime, 1000)
}())

// Close modal on darken background
window.onclick = (e) => {
  if (e.target.className === 'modal') {
    e.target.style.display = 'none'
  }
}
const currentYear = (id) => {

  try {
    const copyYear = new Date().getFullYear();
    document.getElementById(id).innerHTML = `<span>@${copyYear}</<span>`;
  } catch (e) {

  }

}

currentYear('year')

/* Interval for loader*/
setInterval(() => {
  document.querySelector('.loader-container').style.display = 'none'
}, 1500)

// DOM acces to navbar
const queryDOM = {
  nav: document.querySelector('#main-nav'),
  closeNav: document.querySelector('.close-slide'),
  openNav: document.querySelectorAll('.open-slide'),
  container: document.querySelector('.container')
}

// Nav when opened
const openNav = () => {
  // queryDOM.closeNav.style.transform = 'rotate(90deg)'
  queryDOM.nav.style.width = '35rem'
  queryDOM.container.style.paddingLeft = '35rem'
}

// Nav when closed
const closeNav = () => {
  queryDOM.nav.style.width = '0'
  queryDOM.container.style.paddingLeft = '0rem'
  // queryDOM.closeNav.style.transform = 'rotate(-90deg)'
}




