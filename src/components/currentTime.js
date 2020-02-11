import moment from 'moment'
// Ticking seconds and 'hide seconds' as textContent when opening page
export const currentTime = () => {
  const time = moment().format('HH:mm:ss')
  document.querySelector('.current-time').textContent = time

  setTimeout(currentTime, 1000)
}


export default currentTime