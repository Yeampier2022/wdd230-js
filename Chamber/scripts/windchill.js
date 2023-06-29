function showWeather(temp, windspeed){
let temperatureobj = document.querySelector("#temperature");
let windspeedobj = document.querySelector("#windspeed");
let windchillobj = document.querySelector("#windchill");
    chillmsg = 'N/A'
    if(temp <= 50 && windspeed > 3);
        let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16)));
        chillmsg = `The Wind CHill is ${chill} &deg; F`;
    windspeedobj.textContent = windspeed;
    windchillobj.innerhtml = chillmsg
}
showWeather(10,51);




