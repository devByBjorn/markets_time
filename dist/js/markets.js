"use strict"

class Market {
  constructor(timezone, city, open, close) {
    this.timezone = timezone
    this.name = city
    this.time = moment.tz(`${timezone}/${city}`)
    this.open = open
    this.close = close
    this.weekend = ["Sat", "Sun"]
    this.holidays = []
    this.halfDays = []
    this.id = city.toLowerCase()
  }

  pushHolidays(holidays) {
    this.holidays.push(holidays)
  }

  pushHalfDays(halfDays) {
    this.halfDays.push(halfDays)
  }

  // Would like to have moment.tz() only in the constructior but it seems like moment.tz needs to be triggered every minute for DOM clock to change minutes. Look at moments timezone page, first page displays a digital clock, the clock does not update automaticly if no event(change timeozone) occures. 
  setDate() {
    const timezone = `${this.timezone}/${this.name}`
    setInterval(() => {
      const now = moment.tz(timezone).format("HH:mm")
      document.querySelector(`#${this.id}`).textContent = now
    }, 1000)
  }

  setColor() {
    const dayOfWeek = this.time.format("ddd");
    const yearDayMonth = this.time.format("YYYY-MM-DD");
    console.log(yearDayMonth)
    const hoursMinutes = this.time.format("HH:mm");


    if (this.weekend.includes(dayOfWeek) || this.holidays.includes(yearDayMonth)) {
      document.querySelector(`#${this.id}`).style.color = 'red'
    }
  }

  getSummary() {
    `<h3>${this.name} market</h3
    <p>Half day trading: ${this.halfDays}</p>
    <p>No trading: ${this.holidays}</p>`
  }
}


