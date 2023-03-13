import { weatherCodeObject } from './weathercodeobject.js';
import { getWeather } from './defaultweatherinfo.js';
import { getCity } from './defaultweatherinfo.js';


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


function displayCityNameSetup(name) {
    const displayName = CityNameDisplay.append(name);
    return displayName;
}

async function displayAllWeather() {
    
    try {

    const { cityData } = await getCity();
    displayCityNameSetup(cityData);
    console.log(cityData)

    const { currentWeather, weatherCode, dailyMaxTemp, dailyMinTemp } = await getWeather();
    displayCurrentWeather(currentWeather);
    weathercodeDisplay(weatherCode);
    displayTempParameters(dailyMaxTemp, dailyMinTemp);
    
    } catch (error) {
        console.log(error);
    }
}

displayAllWeather();


