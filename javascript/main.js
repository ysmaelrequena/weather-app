import { weatherCodeObject } from './weathercodeobject.js'
import { getWeather } from './defaultweather.js'


// Prints the header's climate information: 

const temperatureDisplay = document.querySelector(".temperature");
const weatherStatus =  document.querySelector(".weather-status");
const tempParameters =  document.querySelector(".temp-parameters");

//Header current temp display

    async function displayWeatherData() {
        
    }
    const displayCurrentWeather = async () => {
         const { currentWeather } = await getWeather();
         const displayedTemp = temperatureDisplay.append(`${Math.round(currentWeather.temperature)}°F`);
         return displayedTemp;
    }

    displayCurrentWeather();
  

   //Header weather status
   console.log(weatherCodeObject)
   
   const weathercodeDisplay = async () => {
    const { weatherCode } = await getWeather();
    const weatherStatusCode = weatherCodeObject.find(x => x.code === weatherCode)
    const display = weatherStatus.append(weatherStatusCode.label);
    return display;
   };
   
   weathercodeDisplay();

//header min-max temp of the day display
const displayTempParameters = async () => {
    //await displayCurrentWeather()
    const { dailyMaxTemp, dailyMinTemp } = await getWeather()
    tempParameters.append(`L: ${Math.round(dailyMinTemp)}°F H: ${Math.round(dailyMaxTemp)}°F`)
}

displayTempParameters();
   




