'use strict'
import moment from 'moment'
import "moment-timezone"

export class Market {
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
  getTime() {

    let cityMomentFit = this.city

    if (cityMomentFit === 'Frankfurt') {
      cityMomentFit = 'Berlin'
    } else if (cityMomentFit.includes('-')) {
      cityMomentFit = cityMomentFit.replace('-', '_')
    }

    // moment.tz needs to be invoked to update every minute
    // if placed inside the constructor it seems like it can't 
    // be used to get updated time every minute
    const time = moment.tz(`${this.region}/${cityMomentFit.replace(' ', '_')}`)

    return {
      timeNow: time,
      hoursMinutes: time.format('HH:mm'),
      dayOfWeek: time.format('ddd'),
      yearDayMonth: time.format('MMM D')
    }
  }

  setHolidays(holidays) {
    return this.holidays = holidays
  }

  setHalfDays(halfDays) {
    return this.halfDays = halfDays
  }

  // get halfday close - make half day close to a constructo argument
  // worked when there was two special cases but when scaling up -
  // the sepcial cases piles up
  getHalfdayClose() {
    let halfdayClose

    if (this.city === 'London') {
      halfdayClose = '12:30'
    } else if (this.city === 'Hong_Kong' || 'Singapore') {
      halfdayClose = '12:00'
    } else if (this.city === 'Amsterdam' || 'Paris') {
      halfdayClose = '14:00'
    } else if (this.city = 'sydney') {
      halfdayClose = '14.10'
    } else {
      halfdayClose = '13:00'
    }

    return halfdayClose
  }

  // open/close status for markets
  getStatus() {
    return {
      isClosed: this.getTime().hoursMinutes < this.open
        || this.getTime().hoursMinutes >= this.close,
      isWeekend: this.weekend.includes(this.getTime().dayOfWeek),
      isHoliday: this.holidays.includes(this.getTime().yearDayMonth),
      isHalfDay: this.halfDays.includes(this.getTime().yearDayMonth)
    }
  }

  // Set text content by id
  setinnerHTML(id, content) {
    document.getElementById(`${id}`).innerHTML = content
  }

  // Countdown to either open or close
  // How get this to work without causing issues for the whole app
  setCountDown(countReference) {

    const countTo = this.getTime().timeNow

    if (this.getStatus().isHalfDay && countReference === this.close) {
      countTo.set({
        'hour': this.getHalfdayClose().slice(0, 2),
        'minutes': this.getHalfdayClose().slice(3, 5),
        'seconds': 0,
        'millisends': 0
      })
    } else {
      countTo.set({
        'hour': countReference.slice(0, 2),
        'minutes': countReference.slice(3, 5),
        'seconds': 0,
        'millisends': 0
      })
    }

    const pad = (num) => {
      return ('0' + parseInt(num)).substr(-2)
    }

    // const tick = () => {
    const now = this.getTime().timeNow

    if (now > countTo) {
      countTo.set(countTo.add(1, 'day'));
    }

    const remain = ((countTo - now) / 1000);
    const hh = pad((remain / 60 / 60) % 60);
    const mm = pad((remain / 60) % 60);
    const ss = pad(remain % 60);

    // return hh mm ss
    return {
      hh: hh,
      mm: mm,
      ss: ss
    }
    // }

    // return tick()
  }

  // Have the statements read before setInterval or setTimeout runs the tick
  // alot of arguments getting read every second otherwise. 
  // How to solve? 
  getCountDown() {
    const counter = document.getElementById(`${this.id}-counter`)
    const nextDay = this.getTime().timeNow.add(1, 'day')
    const nextDayWeekend = nextDay.format('ddd')
    const nextDayHoliday = nextDay.format('MMM D')

    if (this.getStatus().isWeekend) {
      counter.innerHTML = `<span>Market closed</span>`
    } else if (this.getStatus().isHoliday) {
      counter.innerHTML = `<span>Market closed</span>`
    } else if (this.weekend.includes(nextDayWeekend)
      && this.getTime().hoursMinutes > this.close
      || this.holidays.includes(nextDayHoliday)
      && this.getTime().hoursMinutes > this.close) {
      counter.innerHTML = `<span>Market closed tomorrow</span>`
    } else if (this.getStatus().isClosed &&
      !this.getStatus().isWeekend) {
      counter.innerHTML = `<span>Opens in</span>
      <span>${this.setCountDown(this.open).hh}
      ${this.setCountDown(this.open).mm}
      ${this.setCountDown(this.open).hh}</span>`
      //`<span>Opens in</span><span>${hh}:${mm}:${ss}</span>`
    }

    if (this.getStatus().isClosed
      || this.getStatus().isHoliday
      || this.getStatus().isWeekend) {
      return
    } else {
      counter.innerHTML = `<span>Opens in</span><span>${this.setCountDown(this.close)}</span>`
      //`<span>Closes in</span><span>${hh}:${mm}:${ss}</span>`
    }

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

    const self = this
    let timerId = setTimeout(function status() {
      // The main clock for each market
      self.setinnerHTML(`${self.id}-clock`, self.getTime().hoursMinutes)
      self.setinnerHTML(`${self.id}-open`,
        `<span>Trading</span><span>${self.open}-${self.close}</span>`)

      // Weekend content and color theme
      if (self.getStatus().isWeekend) {
        self.getColorTheme('closedForTrading', 'halfDayTrading', 'openForTrading')
        self.setinnerHTML(`${self.id}-open`, `Weekend`)

        // Closed hours content and color theme 
      } else if (self.getStatus().isHoliday) {
        self.getColorTheme('closedForTrading', 'halfDayTrading', 'openForTrading')
        self.setinnerHTML(`${self.id}-open`, `Holiday`)
      }

      else if (self.getStatus().isClosed) {
        self.getColorTheme('closedForTrading', 'halfDayTrading', 'openForTrading')

        // Half day content and color theme
      } else if (self.getStatus().isHalfDay) {
        self.getColorTheme('closedForTrading', 'halfDayTrading', 'openForTrading')
        self.setinnerHTML(`${self.id}-open`,
          `<span>Trading</span><span>${self.open}-${self.getHalfdayClose()}</span>`)

        // color theme on half day trading open
        if (self.getTime().hoursMinutes < self.getHalfdayClose()) {
          self.getColorTheme('halfDayTrading', 'openForTrading', 'closedForTrading')

          // color theme on half day trading close
        } else if (self.getTime().hoursMinutes > self.getHalfdayClose()) {
          self.getColorTheme('closedForTrading', 'halfDayTrading', 'openForTrading')
        }

        // Opening Hours content and color theme
      } else {
        self.getColorTheme('openForTrading', 'halfDayTrading', 'closedForTrading')
      }
      timerId = setTimeout(status, 1000)
    })

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

    // Make sure lunch hour trading is taken into account - 
    // can this be modified in the subclass? 
    if (this.lunchStart && this.lunchEnd) {
      openingHours.innerHTML = `<span>Trading hours</span><span>${this.open}-${this.lunchStart}
                                | ${this.lunchEnd}-${this.close}</<span>`
    } else {
      openingHours.innerHTML = `<span>Trading hours</span><span>${this.open}-${this.close}</<span>`
    }


    //  HTML and Content for MODAL
    const holidaysContent = this.holidays.toString()
    const halfdayContent = this.halfDays.toString()

    header.textContent = `${this.id.replace('-', ' ').toUpperCase()}`
    halfDayHours.innerHTML = `<span>Half day trading hours</span><span>${this.halfDays}</span>`
    weekend.innerHTML = `<span>Weekend</span><span>${this.weekend.join(' | ')}</<span>`
    halfDays.innerHTML = `<span>Half day trading</span><span>${halfdayContent.replace(/,/g, ' | ')}</span>`
    holidays.innerHTML = `<span>Holidays</span><span>${holidaysContent.replace(/,/g, ' | ')}</span>`

    container.appendChild(header)
    container.appendChild(openingHours)
    container.appendChild(weekend)
    container.appendChild(holidays)
    container.appendChild(halfDays)
    container.appendChild(closeBtn)
  }
}

// Subclass for markets closed  during lunch hours ( TOKYO and HONG KONG)
export class MarketWithLunch extends Market {
  constructor(region, city, open, close, lunchStart, lunchEnd) {
    super(region, city, open, close)
    this.lunchStart = lunchStart
    this.lunchEnd = lunchEnd
  }

  closedLunch() {
    setInterval(() => {

      const lunchHour = this.getTime().hoursMinutes > this.lunchStart && this.getTime().hoursMinutes < this.lunchEnd

      if (lunchHour) {
        this.setBackgroundColor(`${this.id}-wrapper`, this.colors.red)
        this.setColor(`${this.id}-wrapper`, this.colors.black)
        this.setinnerHTML(`${this.id}-open`, `Lunch: ${this.lunchStart} - ${this.lunchEnd}`)
      }

    }, 1000)
  }
}

