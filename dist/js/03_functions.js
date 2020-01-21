// Ticking seconds and 'hide seconds' as textContent when opening page
(function tickingSeconds() {
  let seconds = moment().format('ss')

  document.querySelector('#seconds').textContent = seconds
  setTimeout(tickingSeconds, 1000)
}())

// Close modal on darken background
window.onclick = (e) => {
  if (e.target.className === 'modal') {
    e.target.style.display = 'none'
  }
}

