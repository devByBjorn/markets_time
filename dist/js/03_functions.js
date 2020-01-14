// Ticking seconds and 'hide seconds' as textContent when opening page
(function tickingSeconds() {
  let seconds = moment().format('ss')

  document.querySelector('#seconds').textContent = seconds
  setTimeout(tickingSeconds, 1000)
}())


// Function for hide, show and change textContent
const addhideShow = (element, hideOrShow) => {
  document.querySelector(element).classList.add(hideOrShow)
}

const removeAddSHow = (element, hideOrShow) => {
  document.querySelector(element).classList.remove(hideOrShow)
}

const changeContent = (element, content) => {
  document.querySelector(element).textContent = content
}


// Hide or show seconds when checking checkbox
document.querySelector('#control-seconds').addEventListener('change', (e) => {
  if (e.target.checked) {
    addhideShow('#seconds', 'hide')
    removeAddSHow('#seconds', 'show')
    changeContent('.hide-show', 'Show')
  } else if (!e.target.checked) {
    addhideShow('#seconds', 'show')
    removeAddSHow('#seconds', 'hide')
    changeContent('.hide-show', 'Hide')
  }
})

changeContent('.hide-show', 'Hide')


// Come up with solution making sure checkbox always is 
//unchecked and with content 'Hide' on window load