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
    this.colors = {
      red: '#BF211E',
      green: '#44AF69',
      orange: '#FFA630',
      white: '#FDFFFC',
      black: '#000000'
    }
  }

  // manipulate city to fit HTML id
  get id() {
    if (this.city === 'Berlin') {
      this.city = 'Frankfurt'
    } else if (this.city.includes('_')) {
      this.city = this.city.replace('_', '-')
    }
    return this.city.toLowerCase()
  }

  // manipulate city to pass moment.tz() argument specifics 
  getTime(format) {
    if (this.city === 'Frankfurt') {
      this.city = 'Berlin'
    } else if (this.city.includes('-')) {
      this.city = this.city.replace('-', '_')
    }
    return moment.tz(`${this.region}/${this.city.replace(' ', '_')}`).format(format)
  }

  // Set holidays
  setHolidays(holiday) {
    return this.holidays.splice(0, 1, holiday.join(' | '))
  }

  // Set halfdays
  setHalfDays(halfDay) {
    return this.halfDays.splice(0, 1, halfDay.join(' | '))
  }

  // Methods for manipulating DOM structure by id
  setColor = (id, color) => {
    document.getElementById(`${id}`).style.color = color
  }

  // Set background-color by id
  setBackgroundColor = (id, color) => {
    document.getElementById(`${id}`).style.backgroundColor = color
  }

  // Set text content by id
  setTextContent = (id, content) => {
    document.getElementById(`${id}`).textContent = content
  }

  // Manipulating HTML DOM, content and color, depending on market status(closed,open,halfday,holiday)
  contentAndColor() {
    const dayOfWeek = this.getTime('ddd');
    const yearDayMonth = this.getTime('MMM D');


    // For some reason it seems like moment.tz() needs to be triggered for time to update in DOM. If you have a look at moments own page regarding timezones, the clock on the first page does not update automaticly if no event is triggered(display other timezone i their case)
    setInterval(() => {
      const hoursMinutes = this.getTime('HH:mm')
      this.setTextContent(`${this.id}`, hoursMinutes)

      // Weekend
      if (this.weekend.includes(dayOfWeek) || this.holidays[0].includes(yearDayMonth)) {
        this.setBackgroundColor(`${this.id}-wrapper`, this.colors.red)
        this.setColor(`${this.id}-wrapper`, this.colors.black)
        this.setTextContent(`${this.id}-open`, `${this.open} - ${this.close}`)

        // Closed hours  
      } else if (hoursMinutes < this.open || hoursMinutes >= this.close) {
        this.setBackgroundColor(`${this.id}-wrapper`, this.colors.red)
        this.setColor(`${this.id}-wrapper`, this.colors.black)
        this.setTextContent(`${this.id}-open`, `${this.open} - ${this.close}`)

        // Halfday
      } else if (this.halfDays[0].includes(yearDayMonth)) {

        let halfDayClose = this.close

        switch (this.id) {
          case 'London':
            halfDayClose = '12:30'
          default:
            halfDayClose = '13:00'
        }

        this.setTextContent(`${this.id}-open`, `Half day trading:${this.open} - ${halfDayClose}`)
        this.setBackgroundColor(`${this.id}-wrapper`, 'orange')

        if (hoursMinutes < halfDayClose) {
          this.setBackgroundColor(`${this.id}-wrapper`, 'orange')
          this.setColor(`${this.id}-wrapper`, this.colors.white)
        } else if (hoursMinutes > halfDayClose) {
          this.setBackgroundColor(`${this.id}-wrapper`, this.colors.red)
          this.setColor(`${this.id}-wrapper`, this.colors.black)
          this.setTextContent(`${this.id}-open`, `${this.open} - ${this.close}`)
        }

        // Opening Hours
      } else {
        this.setTextContent(`${this.id}-open`, `${this.open} - ${this.close}`)
        this.setBackgroundColor(`${this.id}-wrapper`, this.colors.green)
        this.setColor(`${this.id}-wrapper`, this.colors.white)
      }

    }, 1000)
  }

  // Summury of half days and holidays
  getSummary() {
    const container = document.getElementById(`${this.id}-info`)
    const halfDays = document.createElement('p')
    const holidays = document.createElement('p')

    halfDays.innerHTML = `<span>Half day trading</span><span>${this.halfDays}</span>`
    holidays.innerHTML = `<span>No trading</span><span>${this.holidays}</span>`

    container.appendChild(holidays)
    container.appendChild(halfDays)

    return container
  }

  // displaying modal with half days and holidays info
  getSummaryModal() {
    const infoBtn = document.getElementById(`${this.id}-btn`)
    const closeBtn = document.getElementById(`${this.id}-close`)

    infoBtn.onclick = () => {
      document.getElementById(`${this.id}-modal`).style.display = 'block'
    }

    closeBtn.onclick = () => {
      document.getElementById(`${this.id}-modal`).style.display = 'none'
    }
  }
}

// Subclass for markets closed  during lunch hours
class MarketWithLunch extends Market {
  constructor(region, city, open, close, lunchStart, lunchEnd) {
    super(region, city, open, close)
    this.lunchStart = lunchStart
    this.lunchEnd = lunchEnd
  }

  closedLunch() {
    setInterval(() => {
      const hoursMinutes = this.getTime('HH:mm')
      if (hoursMinutes > this.lunchStart && hoursMinutes < this.lunchEnd) {
        this.setBackgroundColor(`${this.id}-wrapper`, this.colors.red)
        this.setColor(`${this.id}-wrapper`, this.colors.black)
        this.setTextContent(`${this.id}-open`, `Lunch: ${this.lunchStart} - ${this.lunchEnd}`)
      }
    }, 1000)
  }
}

