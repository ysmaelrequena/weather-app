import { weatherCodeObject } from './weathercodeobject.js';
import { getWeather } from './defaultweather.js';
import { getCity } from './defaultweather.js';


// Prints the header's climate information: 

const temperatureDisplay = document.querySelector(".temperature");
const weatherStatus =  document.querySelector(".weather-status");
const tempParameters =  document.querySelector(".temp-parameters");
const CityNameDisplay = document.querySelector(".city-name");


//Header current temp display
    
    const displayCurrentWeather = (currentWeather) => {
         const displayedTemp = temperatureDisplay.append(`${Math.round(currentWeather.temperature)}°F`);
         return displayedTemp;
    }

   //Header weather status
   const weathercodeDisplay = (weatherCode) => {
    const weatherStatusCode = weatherCodeObject.find(x => x.code === weatherCode)
    const display = weatherStatus.append(weatherStatusCode.label);
    return display;
   };
   
   
//header min-max temp of the day display
const displayTempParameters = (dailyMaxTemp, dailyMinTemp) => {
    const display = tempParameters.append(`L: ${Math.round(dailyMinTemp)}°F H: ${Math.round(dailyMaxTemp)}°F`);
    return display;
}


function displayCityNameSetup(data) {
    const displayName =  CityNameDisplay.append(data);
    return displayName;
}


async function displayAllWeather() {
    const { currentWeather, weatherCode, dailyMaxTemp, dailyMinTemp } = await getWeather();
    const { cityData } = await getCity();
    displayCurrentWeather(currentWeather);
    weathercodeDisplay(weatherCode);
    displayTempParameters(dailyMaxTemp, dailyMinTemp);
    displayCityNameSetup(cityData);
}

displayAllWeather();


