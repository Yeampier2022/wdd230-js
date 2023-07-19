const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather");
const captionDesc = document.querySelector("#description");
const windspeed = document.querySelector("#windspeed");
const humidity = document.querySelector("#humidity");

const forecast = document.querySelector(".day-temperature");
const dayOne = document.querySelector(".day1");
const dayTwo = document.querySelector(".day2");
const daythreee = document.querySelector(".day3");

const LAT = "36.778259";
const LON = "-119.417931";
const APIKEY = "aeac4c8af619ecc4c6319897ce68d202";
const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${APIKEY}&units=imperial`;
const Forecast =
  "https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&cnt=24&units=imperial&appid=e69048b761c63a420dffdb9b14015220";

async function apiFetch(apiURL) {
  try {
    const response = await fetch(apiURL);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {}
}

apiFetch(apiURL);
apiFetch(Forecast);

function displayResults(weatherData) {
  if (weatherData.main) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(
      0
    )}</strong>`;

    const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
    const desc = weatherData.weather[0].description;
    const wind_value = weatherData.wind.speed;
    const humidity_value = weatherData.main.humidity;

    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);
    captionDesc.textContent = desc;
    humidity.textContent = humidity_value;

    windspeed.textContent = wind_value;

    const windChillSpan = document.querySelector("#windchill");

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


  if (weatherData.list) {
    const dayone = weatherData.list[6];
    const daytwo = weatherData.list[14];
    const daythree = weatherData.list[22];

    dayOne.innerHTML = `<h3>Tomorrow</h3>
                    <img src="${`https://openweathermap.org/img/w/${dayone.weather[0].icon}.png`}" alt="${
      dayone.weather[0].description
    }" loading="lazy">
                    <p><span>${dayone.weather[0].description
                      .split(" ")
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join(" ")}</span></p>
                    <p><b>Max Temp</b>: <span>${dayone.main.temp_max.toFixed(
                      0
                    )}</span> °F</p>`;

    dayTwo.innerHTML = `<h3>Days Two</h3>
                    <img src="${`https://openweathermap.org/img/w/${daytwo.weather[0].icon}.png`}" alt="${
      daytwo.weather[0].description
    }" loading="lazy">
                    <p><span>${daytwo.weather[0].description
                      .split(" ")
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join(" ")}</span></p>
                    <p><b>Max Temp</b>: <span>${daytwo.main.temp_max.toFixed(
                      0
                    )}</span> °F</p>`;

    daythreee.innerHTML = `<h3>Days Three</h3>
                    <img  style="width:50px" src="${`https://openweathermap.org/img/w/${daythree.weather[0].icon}.png`}" alt="${
      daythree.weather[0].description
    }" loading="lazy">
                    <p><span>${daythree.weather[0].description
                      .split(" ")
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join(" ")}</span></p>
                    <p><b>Max Temp</b>: <span>${daythree.main.temp_max.toFixed(
                      0
                    )}</span> °F</p>`;
  }

 
}

``;
