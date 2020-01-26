// Ticking seconds and 'hide seconds' as textContent when opening page
(function currenTime() {
  let seconds = moment().format('HH:mm:ss')

  document.querySelector('.current-time').innerHTML = `<span>${seconds}</<span>`
  setTimeout(currenTime, 1000)
}())

// Close modal on darken background
window.onclick = (e) => {
  if (e.target.className === 'modal') {
    e.target.style.display = 'none'
  }
}
const currentYear = (id) => {
  const copyYear = new Date().getFullYear();
  document.getElementById(id).innerHTML = `<span>@${copyYear}</<span>`;
}
currentYear('year')

/* Interval for loader*/
setInterval(() => {
  document.querySelector('.loader-container').style.display = 'none'
}, 1500)



