const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const LAT = "33.360355";
const LON = "-111.801682";
const APIKEY = "aeac4c8af619ecc4c6319897ce68d202";
const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${APIKEY}&units=imperial`;

function displayResults(weatherData) {
  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(
    0
  )}</strong>`;

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc;
}

async function apiFetch() {
  try {
    const response = await fetch(apiURL);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
  }
}

apiFetch();


 // ejercicio
var a = 6;
var b = 8;
var c = 3;

var d = a < (b + c); // true
var e = b > c * 5; // false
var f = (c+3) > a; // false

var op1 = d && e; // false
var op2 = f && e;// false
var op3 = (d || f) && (!e || f); // false and // false 

