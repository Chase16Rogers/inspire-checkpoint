export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);
    //NOTE Have you ever wanted to know the temperature measured in kelvin? 
    //      That is what this data returns! data.main.temp is the temperature in Kelvin
    //TODO You should convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try

    this.city = data.name
    this.kelvin = data.main.temp
    this.weather = data.weather[0].main
    this.weatherID = data.weather[0].id
  }

  get Template() {
    return /*html*/`
  <div class="text-center text-light">
  <h5 class="mb-0 text-shadow">${this.city}</h5>
  <div class="d-flex mb-0 text-shadow"><p class="mb-0" >${this.weather} |</p> <p id="temp" class="mb-0">${this.Fahrenheit}</p><p class="mb-0">&deg;</p></div>
  <div class="d-flex text-center text-shadow cursor-pointer justify-content-center">
  <p onclick="app.weatherController.toggleMeasure('f')">F</p> 
  <p>/</p> 
  <p onclick="app.weatherController.toggleMeasure('c')">C</p> </div>
  </div>
`

  }

  get Fahrenheit() {
    let fahrenheit = Math.floor((this.kelvin - 273.15) * 9 / 5 + 32)
    return fahrenheit
  }

  get Celcius() {
    let celsius = Math.floor(this.kelvin - 273.15)
    return celsius
  }

}