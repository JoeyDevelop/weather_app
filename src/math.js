function convertKelvinToFahrenheit(forecast) {
  const tempKel = (forecast.temperature - 273.15) * (9 / 5) + 32;
  forecast.temperature = Math.round((tempKel + Number.EPSILON) * 10) / 10;
  const tempHighKel = (forecast.tempHigh - 273.15) * (9 / 5) + 32;
  forecast.tempHigh = Math.round((tempHighKel + Number.EPSILON) * 10) / 10;
  const tempLowKel = (forecast.tempLow - 273.15) * (9 / 5) + 32;
  forecast.tempLow = Math.round((tempLowKel + Number.EPSILON) * 10) / 10;
  console.log(forecast);
}

function convertFahrenheitToCelsius(event, forecast) {
  const tempCel = (forecast.temperature - 32) * (5 / 9);
  forecast.temperature = Math.round((tempCel + Number.EPSILON) * 10) / 10;
  const tempHighCel = (forecast.tempHigh - 32) * (5 / 9);
  forecast.tempHigh = Math.round((tempHighCel + Number.EPSILON) * 10) / 10;
  const tempLowCel = (forecast.tempLow - 32) * (5 / 9);
  forecast.tempLow = Math.round((tempLowCel + Number.EPSILON) * 10) / 10;
  console.log(forecast);
}

function convertCelsiusToFahrenheit(event, forecast) {
  const tempFah = forecast.temperature * (9 / 5) + 32;
  forecast.temperature = Math.round((tempFah + Number.EPSILON) * 10) / 10;
  const tempHighFah = forecast.tempHigh * (9 / 5) + 32;
  forecast.tempHigh = Math.round((tempHighFah + Number.EPSILON) * 10) / 10;
  const tempLowFah = forecast.tempLow * (9 / 5) + 32;
  forecast.tempLow = Math.round((tempLowFah + Number.EPSILON) * 10) / 10;
  console.log(forecast);
}

export {
  convertKelvinToFahrenheit,
  convertFahrenheitToCelsius,
  convertCelsiusToFahrenheit,
};
