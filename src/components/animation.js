
const fadeIn = setTimeout(() => {
  const container = document.querySelector('.container')

  container.style.paddingTop = '0'
}, 550);

const removeOverFlow = setTimeout(() => {
  const body = document.querySelector('body')

  body.style.overflowY = 'auto'
}, 1000)

export { fadeIn, removeOverFlow }