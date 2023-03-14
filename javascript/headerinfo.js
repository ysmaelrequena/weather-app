//Header current temp display
    
export function displayCurrentWeather(currentWeather) {
    const displayedTemp = temperatureDisplay.append(`${Math.round(currentWeather.temperature)}°F`);
    return displayedTemp;
}

//Header weather status
export function weathercodeDisplay(weatherCode) {
const weatherStatusCode = weatherCodeObject.find(x => x.code === weatherCode);
const display = weatherStatus.append(weatherStatusCode.label);
return display;
};


//header min-max temp of the day display
export function displayTempParameters(dailyMax, dailyMin) {
const display = tempParameters.append(`L: ${Math.round(dailyMin)}°F H: ${Math.round(dailyMax)}°F`);
return display;
}

//display City Name
export function displayCityNameSetup(name) {
const displayName = CityNameDisplay.append(name);
return displayName;
}

//executes all functions and displays info
export async function displayAllWeather() {

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