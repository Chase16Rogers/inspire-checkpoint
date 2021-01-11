import { clockService } from "../Services/ClockService.js"


export default class ClockController {
  constructor() {
    setInterval(this.makeClock, 1000)
  }

  makeClock() {
    clockService.makeClock()
  }

}





// let badTime = date.getTime()
// let angryHour = (((badTime / 1000) / 60) / 60)
// console.log("bad" + angryHour)
// let time = (((1000) * 60) * 60)
// console.log(time)
// let timeSince = badTime / time
// let hoursLeft = angryHour - timeSince
// console.log(hoursLeft + "hours left")

// console.log(timeSince + "hours")
// let timeDiff = timeSince - timeSince % 365
// console.log("time" + timeDiff)