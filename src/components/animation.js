
const fadeIn = setTimeout(() => {
  const headings = document.querySelectorAll('.h1')

  headings.forEach((heading) => {
    heading.classList.remove('transparent')
  })
}, 800);

export default fadeIn