import { convertFahrenheitToCelsius, convertCelsiusToFahrenheit } from "./math";

const body = document.querySelector(".body");
let buttonDef = true;

function clearDom() {
  if (body.querySelector(".display")) {
    body.querySelector(".display").remove();
  }
}

function addForecastToDom(forecast) {
  // create holder
  const display = document.createElement("div");

  display.classList.add("display");

  body.appendChild(display);

  // create display elements
  const button = document.createElement("button");
  const weatherStat = document.createElement("div");
  const tempStat = document.createElement("div");
  const tempHighStat = document.createElement("div");
  const tempLowStat = document.createElement("div");

  button.classList.add("switchTemp");
  weatherStat.classList.add("stat");
  tempStat.classList.add("stat");
  tempHighStat.classList.add("stat");
  tempLowStat.classList.add("stat");

  if (buttonDef === true) {
    button.innerHTML = "°C";
    button.addEventListener("click", (event) => {
      changeTempTypeFToC(event, forecast);
    });
  } else if (buttonDef === false) {
    button.innerHTML = "°F";
    button.addEventListener("click", (event) => {
      changeTempTypeCToF(event, forecast);
    });
  }

  display.appendChild(button);
  display.appendChild(weatherStat);
  display.appendChild(tempStat);
  display.appendChild(tempHighStat);
  display.appendChild(tempLowStat);

  // create keys and values
  const weatherKey = document.createElement("h4");
  const weatherValue = document.createElement("h4");
  const tempKey = document.createElement("h4");
  const tempValue = document.createElement("h4");
  const tempHighKey = document.createElement("h4");
  const tempHighValue = document.createElement("h4");
  const tempLowKey = document.createElement("h4");
  const tempLowValue = document.createElement("h4");

  weatherKey.classList.add("keys");
  tempKey.classList.add("keys");
  tempHighKey.classList.add("keys");
  tempLowKey.classList.add("keys");
  weatherValue.classList.add("values");
  tempValue.classList.add("values");
  tempHighValue.classList.add("values");
  tempLowValue.classList.add("values");

  weatherKey.innerHTML = "Weather: ";
  tempKey.innerHTML = "Temperature: ";
  tempHighKey.innerHTML = "Temp high: ";
  tempLowKey.innerHTML = "Temp low: ";
  weatherValue.innerHTML = forecast.weather;
  tempValue.innerHTML = forecast.temperature;
  tempHighValue.innerHTML = forecast.tempHigh;
  tempLowValue.innerHTML = forecast.tempLow;

  weatherStat.appendChild(weatherKey);
  weatherStat.appendChild(weatherValue);
  tempStat.appendChild(tempKey);
  tempStat.appendChild(tempValue);
  tempHighStat.appendChild(tempHighKey);
  tempHighStat.appendChild(tempHighValue);
  tempLowStat.appendChild(tempLowKey);
  tempLowStat.appendChild(tempLowValue);
}

function changeTempTypeFToC(event, forecast) {
  convertFahrenheitToCelsius(event, forecast);
  clearDom();
  buttonDef = false;
  addForecastToDom(forecast);
}

function changeTempTypeCToF(event, forecast) {
  convertCelsiusToFahrenheit(event, forecast);
  clearDom();
  buttonDef = true;
  addForecastToDom(forecast);
}

export { clearDom, addForecastToDom };
