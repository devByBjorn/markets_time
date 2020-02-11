// Function create element
const createEl = (el, id, className, text) => {
  const element = document.createElement(el)
  element.setAttribute('id', id)
  element.setAttribute('class', className)
  element.textContent = text

  return element
}

export default createEl