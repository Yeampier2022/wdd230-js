const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather");
const captionDesc = document.querySelector("#description");
const windspeed = document.querySelector("#windspeed");
const LAT = "33.360355";
const LON = "-111.801682";
const APIKEY = "aeac4c8af619ecc4c6319897ce68d202";
const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${APIKEY}&units=imperial`;

function displayResults(weatherData) {
  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(
    0
  )}</strong>`;

  // You can use @2x or @4x to make the icon bigger, or omit it for the standard size
  const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
  const desc = weatherData.weather[0].description;
  const wind_value = weatherData.wind.speed;


  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);
  captionDesc.textContent = desc;
  
  windspeed.textContent = wind_value;

  const windChillSpan = document.querySelector("#windchill");

  // Set up the wind chill content
  let windchill = "N/A";
  if (wind_value >= 3.0 && weatherData.main.temp.toFixed(0) <= 50) {
    let chill = Math.round(
      35.74 +
        0.6215 * weatherData.main.temp.toFixed(0) -
        35.75 * Math.pow(wind_value, 0.16) +
        0.4275 * weatherData.main.temp.toFixed(0) * Math.pow(wind_value, 0.16)
    );
    windchill = `${chill}`;
  }

  windChillSpan.innerHTML = windchill;
}

async function apiFetch() {
  try {
    const response = await fetch(apiURL);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // this is for testing the call uncomment the following line when ready
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}
``;
apiFetch();

// yeampier

const datefield = document.querySelector("time");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", {
  dateStyle: "full",
}).format(now);
console.log(datefield);
datefield.textContent = fulldate;
