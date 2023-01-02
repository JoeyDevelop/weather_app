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
      convertKelvinToFahrenheit();
    })
    .catch(function (error) {
      alert(error);
    });
}

function defineVariables(response) {
  forecast = {
    weather: response.weather[0].main,
    temperature: response.main.temp,
    feelsLike: response.main.feels_like,
    tempHigh: response.main.temp_max,
    tempLow: response.main.temp_min,
  };
}

function convertKelvinToFahrenheit() {
  const tempFah = (forecast.temperature - 273.15) * (9 / 5) + 32;
  forecast.temperature = Math.round((tempFah + Number.EPSILON) * 100) / 100;
  const feelsLikeFah = (forecast.feelsLike - 273.15) * (9 / 5) + 32;
  forecast.feelsLike = Math.round((feelsLikeFah + Number.EPSILON) * 100) / 100;
  const tempHighFah = (forecast.tempHigh - 273.15) * (9 / 5) + 32;
  forecast.tempHigh = Math.round((tempHighFah + Number.EPSILON) * 100) / 100;
  const tempLowFah = (forecast.tempLow - 273.15) * (9 / 5) + 32;
  forecast.tempLow = Math.round((tempLowFah + Number.EPSILON) * 100) / 100;
  console.log(forecast);
}
