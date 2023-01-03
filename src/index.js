import { clearDom, addForecastToDom } from "./dom";
import { convertKelvinToFahrenheit } from "./math";

const searchbar = document.querySelector("input");
const searchBtn = document.querySelector(".searchBtn");
let forecast = {};

searchBtn.addEventListener("click", () => {
  const info = searchbar.value;
  console.log(info);
  sendWeatherRequest(info);
});
searchbar.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    searchBtn.click();
  }
});

function sendWeatherRequest(info) {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      info +
      "&APPID=f267f51a8b8e85d282f5213c10ec1f47",
    { mode: "cors" }
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Invalid city request");
      // return response.json();
    })
    .then((response) => {
      defineVariables(response);
    })
    .then(() => {
      convertKelvinToFahrenheit(forecast);
    })
    .then(() => {
      clearDom();
      addForecastToDom(forecast);
    })
    .catch(function (error) {
      alert(error);
    });
}

function defineVariables(response) {
  forecast = {
    weather: response.weather[0].main,
    temperature: response.main.temp,
    tempHigh: response.main.temp_max,
    tempLow: response.main.temp_min,
  };
}
