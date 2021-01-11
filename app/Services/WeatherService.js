import { ProxyState } from "../AppState.js";
import Weather from "../Models/Weather.js";
import { api } from "./AxiosService.js";

class WeatherService {
  toggleMeasure(fc) {
    if (fc == "c") {
      document.getElementById("temp").innerText = ProxyState.weather.Celcius
    } else {
      document.getElementById("temp").innerText = ProxyState.weather.Fahrenheit
    }

  }
  async getWeather() {
    console.log("Calling the Weatherman");
    let res = await api.get('weather');
    ProxyState.weather = new Weather(res.data);
  }
}

const weatherService = new WeatherService();
export default weatherService;