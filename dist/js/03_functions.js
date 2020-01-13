(function tickingSeconds() {
  let seconds = moment().format("ss")

  document.querySelector("#seconds").textContent = seconds
  setTimeout(tickingSeconds, 1000)
}())



// style backgroundColor
// const setBackgroundColor = (id, color) => {
//   document.querySelector(`#${id}`).style.backgroundColor = color
// }

// //style color
// const setColor = (id, color) => {
//   document.querySelector(`#${id}`).style.color = color
// }

// //textContent
// const setTextContent = (id, content) => {
//   document.querySelector(`#${id}`).textContent = content
// }

