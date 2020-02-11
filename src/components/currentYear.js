const currentYear = () => {
  try {
    const year = new Date().getFullYear();
    document.getElementById('year').textContent = `MiT @${year}`
  } catch (e) {

  }
}

export default currentYear


