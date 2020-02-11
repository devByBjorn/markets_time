import createEl from './createElement'


const elDOM = (city) => {
  const wrapper = createEl('div', `${city}-wrapper`, 'wrapper', '')

  const heading = createEl('h3', `${city}-heading`, 'h1', `${city}`)
  const openInfo = createEl('p', `${city}-open`, 'open', '')
  const clock = createEl('h3', `${city}-clock`, 'time', '')
  const btn = createEl('button', `${city}-btn`, `info-btn ${city}`, 'Info')

  const removeBtn = createEl('button', `${city}-remove-btn`, 'remove-btn', 'remove')
  removeBtn.addEventListener('click', () => {
    document.getElementById(`${city}-wrapper`).remove()
  })

  const modal = createEl('div', `${city}-modal`, 'modal', '')
  const modalContent = createEl('div', `${city}-info`, 'info', '')
  modal.appendChild(modalContent)

  wrapper.appendChild(heading)
  wrapper.appendChild(openInfo)
  wrapper.appendChild(clock)
  wrapper.appendChild(btn)
  wrapper.appendChild(modal)
  wrapper.appendChild(removeBtn)

  return wrapper
}

export default elDOM
