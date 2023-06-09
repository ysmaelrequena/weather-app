//Imports for all the relevant Information
import { weatherCodeObject } from './weathercodeobject.js';
import { getWeather } from './defaultweatherinfo.js';
import { getCity } from './defaultweatherinfo.js';

// List of elements that are to be manipulated by JS 

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
const weatherStatusCode = weatherCodeObject.find(x => x.code === weatherCode);
const display = weatherStatus.append(weatherStatusCode.label);
return display;
};


//header min-max temp of the day display
const displayTempParameters = (dailyMax, dailyMin) => {
const display = tempParameters.append(`L: ${Math.round(dailyMin)}°F H: ${Math.round(dailyMax)}°F`);
return display;
}

//display City Name
function displayCityNameSetup(name) {
const displayName = CityNameDisplay.append(name);
return displayName;
}

//executes all functions and displays info
async function displayAllWeather() {

try {

const cityData = await getCity();
displayCityNameSetup(cityData);

const { currentWeather, weatherCode, dailyMaxTemp, dailyMinTemp } = await getWeather();
displayCurrentWeather(currentWeather);
weathercodeDisplay(weatherCode);
displayTempParameters(dailyMaxTemp, dailyMinTemp);

} catch (error) {
   console.log(error);
};
};

displayAllWeather();


