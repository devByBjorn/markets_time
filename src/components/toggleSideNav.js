
// Nav when opened
const toggleNav = (width) => {
  const body = document.querySelector('body')
  const nav = document.querySelector('.sliding-nav')
  const container = document.querySelector('.container')

  if (nav.style.width !== width) {
    nav.style.width = width
  }

  if (body.children[2].classList.value === "container"
    && container.style.paddingLeft !== width) {
    container.style.paddingLeft = width
  }
}

const closeNav = document.querySelector('.close-slide').addEventListener('click', () => {
  toggleNav('0rem')
})
const openNav = document.querySelector('.open-slide').addEventListener('click', () => {
  toggleNav('15rem')
})


export { closeNav, openNav }