const searchbar = document.querySelector("input");
const searchBtn = document.querySelector(".searchBtn");

searchBtn.addEventListener("click", () => {
  const info = searchbar.value;
  console.log(info);
  sendWeatherRequest(info);
});

function sendWeatherRequest(info) {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      info +
      "&APPID=f267f51a8b8e85d282f5213c10ec1f47",
    { mode: "cors" }
  )
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log(response);
    });
}
