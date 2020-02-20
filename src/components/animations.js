export const removeOverFlow = setTimeout(() => {
  const body = document.querySelector('body')

  body.style.overflowY = 'auto'
}, 1800)

export const addKeyFrame = (id, animation, duration) => {
  const element = document.getElementById(id)
  if (element.style.animation) {
    element.style.animation = `${animation} ${duration}`
  } else {
    element.removeAttribute('style')
    setTimeout(() => {
      element.style.animation = `${animation} ${duration}`
    }, 30)
  }
}


