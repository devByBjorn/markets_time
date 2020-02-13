
const fadeIn = setTimeout(() => {
  const headings = document.querySelectorAll('.h1')

  headings.forEach((heading) => {
    heading.classList.remove('transparent')
  })
}, 100);

export default fadeIn