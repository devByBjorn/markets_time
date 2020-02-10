import moment from 'moment'
// Ticking seconds and 'hide seconds' as textContent when opening page
export const currentTime = () => {
  const time = moment().format('HH:mm:ss')
  document.querySelector('.current-time').textContent = time

  setTimeout(currentTime, 1000)
}

export const currentYear = () => {
  try {
    const year = new Date().getFullYear();
    document.getElementById('year').textContent = `MiT @${year}`
  } catch (e) {

  }
}

/* Interval for loader*/
export const loader = () => {
  document.querySelector('.loader-container').style.display = 'none'
}

// Nav when opened
const openStyle = () => {
  document.querySelector('#main-nav').style.width = '15rem'
  document.querySelector('.container').style.paddingLeft = '15rem'
  // queryDOM.closeNav.style.transform = 'rotate(90deg)'
}

const open = document.querySelector('.open-slide')
export const openNav = open.addEventListener('click', openStyle)


// Nav when closed
const closeStyle = () => {
  document.querySelector('#main-nav').width = '0'
  document.querySelector('.container').paddingLeft = '0rem'
  // queryDOM.closeNav.style.transform = 'rotate(-90deg)'
}

const close = document.querySelector('.close-slide')
export const closeNav = close.addEventListener('click', closeStyle)




