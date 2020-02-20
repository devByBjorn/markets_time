'use strict'
import moment from 'moment'
import "moment-timezone"
import { removeOverFlow, addKeyFrame } from './components/animations'

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

    let city = this.city
    if (city === 'Frankfurt') {
      city = 'Berlin'
    } else if (city.includes('-')) {
      city = city.replace('-', '_')
    }

    const time = moment.tz(`${this.region}/${city.replace(' ', '_')}`)

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

    switch (this.city) {
      case 'London':
        return halfdayClose = '12:30'
      case 'Amsterdam':
        return halfdayClose = '14:00'
      case 'Paris':
        return halfdayClose = '14:00'
      case 'Hong_Kong':
        return halfdayClose = '12:00'
      case 'Singapore':
        return halfdayClose = '12:00'
      case 'Sydney':
        return halfdayClose = '14:10'
      default:
        halfdayClose = '13:00'
    }

    return halfdayClose
  }

  // open/close status for markets
  getStatus() {
    const { weekend, holidays, halfDays, open, close } = this

    return {
      isClosed: this.getTime().hoursMinutes < open || this.getTime().hoursMinutes >= close,
      isWeekend: weekend.includes(this.getTime().dayOfWeek),
      isHoliday: holidays.includes(this.getTime().yearDayMonth),
      isHalfDay: halfDays.includes(this.getTime().yearDayMonth)
    }
  }

  // Set text content by id
  setinnerHTML(id, content) {
    document.getElementById(`${id}`).innerHTML = content
  }

  getColorTheme(toAdd, toRemove, toRemoveTwo, id) {
    const marketWrapper = document.getElementById(`${id}-wrapper`)
    const infoBtn = document.getElementById(`${id}-btn`)

    marketWrapper.classList.add(toAdd)
    marketWrapper.classList.remove(toRemove)
    marketWrapper.classList.remove(toRemoveTwo)

    switch (toAdd) {
      case 'closedForTrading':
        infoBtn.classList.remove('openMarketBtn')
        infoBtn.classList.add('closedMarketBtn')
        break
      case 'openForTrading':
        infoBtn.classList.remove('closedMarketBtn')
        infoBtn.classList.add('openMarketBtn')
        break
      case 'halfDayTrading':
        infoBtn.classList.remove('openMarketBtn')
        infoBtn.classList.remove('closedMarketBtn')
        infoBtn.classList.add('halfDayMarketBtn')
    }
  }

  // Manipulating market wrappers DOM, content and color, 
  //depending on market status(closed,open,halfday,holiday)
  statusColor() {
    let self = this
    const { id, open, close, setinnerHTML, getColorTheme } = self

    let timerId = setTimeout(function status() {
      // The main clock for each market
      setinnerHTML(`${id}-clock`, self.getTime().hoursMinutes)
      setinnerHTML(`${id}-open`, `<span>${open}-${close}</span>`)

      if (self.getStatus().isWeekend) {
        getColorTheme('closedForTrading', 'halfDayTrading', 'openForTrading', id)
        setinnerHTML(`${id}-open`, `Weekend`)
      } else if (self.getStatus().isHoliday) {
        getColorTheme('closedForTrading', 'halfDayTrading', 'openForTrading', id)
        setinnerHTML(`${id}-open`, `Holiday`)
      } else if (!self.getStatus().isHalfDay && self.getStatus().isClosed) {
        getColorTheme('closedForTrading', 'halfDayTrading', 'openForTrading', id)
      } else if (self.getStatus().isHalfDay) {
        setinnerHTML(`${id}-open`, `<span>${open}-${self.getHalfdayClose()}</span>`)
        if (self.getTime().hoursMinutes > open && self.getTime().hoursMinutes < self.getHalfdayClose()) {
          getColorTheme('halfDayTrading', 'openForTrading', 'closedForTrading', id)
        } else if (self.getTime().hoursMinutes > self.getHalfdayClose() || self.getTime().hoursMinutes < open) {
          getColorTheme('closedForTrading', 'halfDayTrading', 'openForTrading', id)
        }
      } else {
        getColorTheme('openForTrading', 'halfDayTrading', 'closedForTrading', id)
      }
      timerId = setTimeout(status, 1000)
    })

  }
  // Summury DOM inside of modal
  setSummary() {
    const { id, open, close, lunchStart, lunchEnd, holidays, halfDays, weekend } = this

    const modal = document.getElementById(`${id}-modal`)
    const container = document.getElementById(`${id}-info`)
    const header = document.createElement('h3')
    const openingHours = document.createElement('p')
    const halfDayHours = document.createElement('p')
    const weekendDays = document.createElement('p')
    const halfDayDays = document.createElement('p')
    const holidayDays = document.createElement('p')

    const closeBtn = document.createElement('div')
    closeBtn.innerHTML = '&times;'
    closeBtn.setAttribute('id', `${id}-close`)
    closeBtn.setAttribute('class', 'close')
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none'
    })

    container.innerHTML = ''

    // Make sure lunch hour trading is taken into account - 
    // can this be modified in the subclass? 
    if (lunchStart && lunchEnd) {
      openingHours.innerHTML = `<span>Trading hours</span><span>${open}-${lunchStart}
                                | ${lunchEnd}-${close}</<span>`
    } else {
      openingHours.innerHTML = `<span>Trading hours</span><span>${open}-${close}</<span>`
    }

    //  HTML and Content for MODAL
    const holidaysContent = holidays.toString()
    const halfdayContent = halfDays.toString()
    header.textContent = `${id.replace('-', ' ').toUpperCase()}`
    halfDayHours.innerHTML = `<span>Half day trading hours</span><span>${halfDays}</span>`
    weekendDays.innerHTML = `<span>Weekend</span><span>${weekend.join(' | ')}</<span>`
    halfDayDays.innerHTML = `<span>Half day trading</span><span>${halfdayContent.replace(/,/g, ' | ')}</span>`
    holidayDays.innerHTML = `<span>Holidays</span><span>${holidaysContent.replace(/,/g, ' | ')}</span>`

    container.appendChild(header)
    container.appendChild(openingHours)
    container.appendChild(weekendDays)
    container.appendChild(holidayDays)
    container.appendChild(halfDayDays)
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
    let self = this
    const { setinnerHTML, getColorTheme, lunchStart, lunchEnd } = self

    setInterval(() => {
      const lunchHour = self.getTime().hoursMinutes > lunchStart && self.getTime().hoursMinutes < lunchEnd

      if (lunchHour) {
        getColorTheme('closedForTrading', 'halfDayTrading', 'openForTrading', id)
        setinnerHTML(`${id}-open`, `Lunch: ${lunchStart} - ${lunchEnd}`)
      }

    }, 1000)
  }
}

