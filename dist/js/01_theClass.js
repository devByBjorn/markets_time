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

  // Sett holidays
  setHolidays(holidays) {
    this.holidays.splice(0, 1, holidays)
  }

  // Set halfdays
  setHalfDays(halfDays) {
    this.halfDays.splice(0, 1, halfDays)
  }

  // Methods for manipulating DOM structure by id
  setColor = (id, color) => {
    document.querySelector(`#${id}`).style.color = color
  }

  // Set background-color by id
  setBackgroundColor = (id, color) => {
    document.querySelector(`#${id}`).style.backgroundColor = color
  }

  // Set text content by id
  setTextContent = (id, content) => {
    document.querySelector(`#${id}`).textContent = content
  }

  // Manipulating HTML DOM, content and color, depending on market status(closed,open,halfday,holiday)
  contentAndColor() {
    const dayOfWeek = this.getTime('ddd');
    const yearDayMonth = this.getTime('YYYY-MM-DD');

    // For some reason it seems like moment.tz() needs to be triggered for time to update in DOM. If you have a look at moments own page regarding timezones, the clock on the first page does not update automaticly if no event is triggered(display other timezone i their case)
    setInterval(() => {
      const hoursMinutes = this.getTime('HH:mm')
      this.setTextContent(`${this.id}`, hoursMinutes)

      // Weekend
      if (this.weekend.includes(dayOfWeek) || this.holidays[0].includes(yearDayMonth)) {
        this.setBackgroundColor(`${this.id}-wrapper`, this.colors.red)
        this.setColor(`${this.id}-wrapper`, this.colors.black)
        this.setTextContent(`${this.id}-open`, `Trades next weekday: ${this.open} - ${this.close}`)

        // Closed hours  
      } else if (hoursMinutes < this.open || hoursMinutes >= this.close) {
        this.setBackgroundColor(`${this.id}-wrapper`, this.colors.red)
        this.setColor(`${this.id}-wrapper`, this.colors.black)
        this.setTextContent(`${this.id}-open`, `Trades next weekday: ${this.open} - ${this.close}`)

        // Halfday
      } else if (this.halfDays.includes(yearDayMonth)) {
        this.close = '13:00'
        this.setTextContent(`${this.id}-open`, `Half day trading: ${this.open} - ${this.close}`)

        if (hoursMinutes < this.close) {
          this.setBackgroundColor(`${this.id}-wrapper`, 'orange')
          this.setColor(`${this.id}-wrapper`, this.colors.white)
        } else if (hoursMinutes > this.close) {
          this.setBackgroundColor(`${this.id}-wrapper`, this.colors.red)
          this.setColor(`${this.id}-wrapper`, this.colors.black)
        }

        // Open Hours
      } else {
        this.setTextContent(`${this.id}-open`, `Regular trading: ${this.open} - ${this.close}`)
        this.setBackgroundColor(`${this.id}-wrapper`, this.colors.green)
        this.setColor(`${this.id}-wrapper`, this.colors.white)
      }

    }, 1000)
  }

  // Summury of halfdays and holidays
  getSummary() {

    return `<p>Half day trading: ${this.halfDays}</p>
    <p>No trading: ${this.holidays}</p>`
  }
}

// subclass for markets closed  during lunch hours
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
        this.setTextContent(`${this.id}-open`, `Closed for lunch: ${this.lunchStart} - ${this.lunchEnd}`)
      }
    }, 10)
  }
}

