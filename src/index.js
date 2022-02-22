let now = new Date();
let hour = now.getHours();
let date = now.getDay();
let minute = now.getMinutes();
let days = ["Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
"Thursday"
"Friday",
"Saturday"];

//
function currentTime(now) {
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let newTime = `${hours}:${minutes}`;
  return newTime;
}

let spanTime = document.querySelector("#time");
spanTime.innerHTML = currentTime(now);
//

function enterCity(event) {
  event.preventDefault();
  let cityInput = document.getElementById("#location-input");
  let change = document.getElementById("city");
  cityInput.innerHTML = `${cityInput.value};`
}

let cityForm = document.getElementById("#location-input");
cityForm.addEventListener("submit", enterCity);

//
function searchLocation(position) {
  let apiKey = "1f983d213665d2d7dbab69270eb302b3";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(showWeather);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}
//
function searchCity(cityInput) {
  let apiKey = "1f983d213665d2d7dbab69270eb302b3";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showWeather);
}
//
let currentLocation = document.querySelector("#city");
currentLocation.addEventListener("click", getCurrentLocation);
