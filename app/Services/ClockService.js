
class ClockService {
  makeClock() {
    let date = new Date()
    let minutes = date.getMinutes()
    let hours = date.getHours()
    let zero = ""
    if (hours > 12) { hours = hours - 12 }
    if (minutes < 10) { zero = "0" }
    console.log(hours + ":" + zero + minutes)
    if (hours > 12) {
      hours = hours - 12
    }
    let template = /*html*/`
    <h2>${hours + ":" + zero + minutes}</h2>
    `
    document.getElementById("clock").innerHTML = template
  }

  updateClock() {

  }
}

export const clockService = new ClockService()