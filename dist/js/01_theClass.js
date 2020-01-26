'use strict'

class Market {
  constructor(region, city, open, close) {
    this.region = region
    this.city = city
    this.open = open
    this.close = close
    this.weekend = ['Sat', 'Sun']
    this.holidays = ['No trading holidays']
    this.halfDays = ['No half day trading days']
  }

  // manipulate city to fit HTML id
  get id() {

    let cityID = this.city

    if (cityID === 'Berlin') {
      cityID = 'Frankfurt'
    } else if (cityID.includes('_')) {
      cityID = cityID.replace('_', '-')
    }
    return cityID.toLowerCase()
  }

  // manipulate city to pass moment.tz() argument specifics 
  getTime(format) {

    let cityMomentFit = this.city

    if (cityMomentFit === 'Frankfurt') {
      cityMomentFit = 'Berlin'
    } else if (cityMomentFit.includes('-')) {
      cityMomentFit = cityMomentFit.replace('-', '_')
    }

    return moment.tz(`${this.region}/${cityMomentFit.replace(' ', '_')}`).format(format)
  }

  // Set holidays
  setHolidays(holiday) {
    let dayHoliday = this.holidays
    return dayHoliday.splice(0, 1, holiday.join(' | '))
  }

  // Set halfdays
  setHalfDays(halfDay) {
    let dayHalfday = this.halfDays
    return dayHalfday.splice(0, 1, halfDay.join(' | '))
  }

  // Set text content by id
  setTextContent(id, content) {
    document.getElementById(`${id}`).textContent = content
  }

  //get halfday close
  getHalfdayClose() {
    let halfDayClose

    if (this.city === 'London') {
      halfDayClose = '12:30'
    } else {
      halfDayClose = '13:00'
    }

    return halfDayClose
  }

  getColorTheme(toAdd, toRemove, toRemoveTwo) {
    const marketWrapper = document.getElementById(`${this.id}-wrapper`)
    const infoBtn = document.getElementById(`${this.id}-btn`)

    marketWrapper.classList.add(toAdd)
    marketWrapper.classList.remove(toRemove)
    marketWrapper.classList.remove(toRemoveTwo)

    if (toAdd === 'closedForTrading') {
      infoBtn.classList.remove('openMarketBtn')
      infoBtn.classList.add('closedMarketBtn')
    } else {
      infoBtn.classList.remove('closedMarketBtn')
      infoBtn.classList.add('openMarketBtn')
    }

  }

  // Manipulating market wrappers DOM, content and color, 
  //depending on market status(closed,open,halfday,holiday)
  statusColor() {

    // Time to set closed/open/half day arguments
    const hoursMinutes = this.getTime('HH:mm') // exampel: 14:32 (string)
    const dayOfWeek = this.getTime('ddd')  // exampel: Mon (string)
    const yearDayMonth = this.getTime('MMM D')  // exampel: Feb 17 (string)

    // Market is closed arguments
    const halfDayClose = this.getHalfdayClose()
    const isWeekend = this.weekend.includes(dayOfWeek) || this.holidays[0].includes(yearDayMonth)
    const isHalfDay = this.halfDays[0].includes(yearDayMonth)
    const closedHours = hoursMinutes < this.open || hoursMinutes >= this.close

    // The main clock for each market
    this.setTextContent(`${this.id}`, hoursMinutes)

    // Weekend content and color theme
    if (isWeekend) {
      this.getColorTheme('closedForTrading', 'halfDayTrading', 'openForTrading')
      this.setTextContent(`${this.id}-open`, `Weekend`)

      // Closed hours content and color theme 
    } else if (closedHours) {
      this.getColorTheme('closedForTrading', 'halfDayTrading', 'openForTrading')
      this.setTextContent(`${this.id}-open`, `Closed`)

      // Half day content and color theme
    } else if (isHalfDay) {
      this.setTextContent(`${this.id}-open`, `Half day trading: ${this.open} - ${halfDayClose}`)

      // color theme on half day trading open
      if (hoursMinutes < halfDayClose) {
        this.getColorTheme('halfDayTrading', 'openForTrading', 'closedForTrading')

        // color theme on half day trading close
      } else if (hoursMinutes > halfDayClose) {
        this.getColorTheme('closedForTrading', 'halfDayTrading', 'openForTrading')
        this.setTextContent(`${this.id}-open`, `${this.open} - ${this.close}`)
      }

      // Opening Hours content and color theme
    } else {
      this.getColorTheme('openForTrading', 'halfDayTrading', 'closedForTrading')
      this.setTextContent(`${this.id}-open`, `${this.open} - ${this.close}`)
    }
  }

  setSummary() {
    // Summury DOM inside of modal
    const modal = document.getElementById(`${this.id}-modal`)
    const container = document.getElementById(`${this.id}-info`)

    const header = document.createElement('h3')
    const openingHours = document.createElement('p')
    const halfDayHours = document.createElement('p')
    const weekend = document.createElement('p')
    const halfDays = document.createElement('p')
    const holidays = document.createElement('p')

    const closeBtn = document.createElement('div')
    closeBtn.innerHTML = '&times;'
    closeBtn.setAttribute('id', `${this.id}-close`)
    closeBtn.setAttribute('class', 'close')
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none'
    })

    // Make sure modal info does not duplicate html structure on every open
    container.innerHTML = ''

    // Make sure lunch hour trading is taken into account
    if (this.lunchStart && this.lunchEnd) {
      openingHours.innerHTML = `<span>Trading hours</span><span>${this.open} - ${this.lunchStart} | ${this.lunchEnd} - ${this.close}</<span>`
    } else {
      openingHours.innerHTML = `<span>Trading hours</span><span>${this.open} - ${this.close}</<span>`
    }

    //  HTML and Content for MODAL
    header.textContent = `${this.id.replace('-', ' ').toUpperCase()}`
    halfDayHours.innerHTML = `<span>Half day trading hours</span><span>${this.halfDays}</span>`
    weekend.innerHTML = `<span>Weekend</span><span>${this.weekend.join(' | ')}</<span>`
    halfDays.innerHTML = `<span>Half day trading</span><span>${this.halfDays}</span>`
    holidays.innerHTML = `<span>Holidays</span><span>${this.holidays}</span>`

    container.appendChild(header)
    container.appendChild(openingHours)
    container.appendChild(weekend)
    container.appendChild(holidays)
    container.appendChild(halfDays)
    container.appendChild(closeBtn)

    return container
  }

  openCLoseModal() {
    document.getElementById(`${this.id}-btn`).addEventListener('click', () => {
      this.setSummary()
      document.getElementById(`${this.id}-modal`).style.display = 'block'
    })
  }
}

// Subclass for markets closed  during lunch hours ( TOKYO and HONG KONG)
class MarketWithLunch extends Market {
  constructor(region, city, open, close, lunchStart, lunchEnd) {
    super(region, city, open, close)
    this.lunchStart = lunchStart
    this.lunchEnd = lunchEnd
  }

  closedLunch() {
    setInterval(() => {
      const hoursMinutes = this.getTime('HH:mm')
      const lunchHour = hoursMinutes > this.lunchStart && hoursMinutes < this.lunchEnd

      if (lunchHour) {
        this.setBackgroundColor(`${this.id}-wrapper`, this.colors.red)
        this.setColor(`${this.id}-wrapper`, this.colors.black)
        this.setTextContent(`${this.id}-open`, `Lunch: ${this.lunchStart} - ${this.lunchEnd}`)
      }

    }, 1000)
  }
}

