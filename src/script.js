let now = new Date();
let h3 = document.querySelector("h3");
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
h3.innerHTML = `${day} ${hours}:${minutes}`;

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");

  console.log(searchInput.value);

  let h2 = document.querySelector("h2");
  h2.innerHTML = `${searchInput.value}`;

  searchCity(searchInput.value);
}

function searchCity(city) {
  let apiKey = "ea9344a18761a6125e03457c30e72fe8";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showTemperature);
}

let form = document.querySelector("#search-form");

form.addEventListener("submit", search);

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  console.log(temperature);
  console.log(response);
  let city = response.data.name;
  let message = `${temperature}°C`;
  let h4 = document.querySelector("h4");
  h4.innerHTML = message;

  let h2 = document.querySelector("h2");
  h2.innerHTML = city;
}

function converttoFahrenheit(event) {
  event.preventDefault();
  let tempElement = document.querySelector("temp");
  let temp = tempElement.innerHTML;
  temp = Number(temp;
  tempElement.innerHTML = Math.round((temp * 9) / 5 + 32);
}

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", converttoFahrenheit);
