
export async function getWeather() {
    try {
      const success = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      const coordinates = success.coords;
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      localStorage.setItem('latitude',`${coordinates.latitude}` );
      localStorage.setItem('longitude', `${coordinates.longitude}`);
  
      const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${coordinates.latitude}&longitude=${coordinates.longitude}&hourly=temperature_2m,apparent_temperature,precipitation_probability,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&timeformat=unixtime&timezone=${timezone}`);
      const data = await res.json();

      const weatherData = {
      
        currentWeather: data.current_weather,
        dailyMaxTemp: Math.max(parseFloat(data.daily.temperature_2m_max)),
        dailyMinTemp: Math.max(parseFloat(data.daily.temperature_2m_min)),
        tempUnit: data.daily_unit,
        hourlyUnits: data.hourly_units,
        weatherCode: data.current_weather.weathercode

      }

      return weatherData;
    } catch (error) {
      return {
        currentWeather: {
          temperature: null,
          weatherDescription: null,
        },
        dailyMaxTemp: null,
        dailyMinTemp: null,
        weatherCode: null,
      };
    }
  }

  export async function getCity() {
    
      const success = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });


      const coordinates =  success.coords;

      const urlReverse = `http://api.positionstack.com/v1/reverse?access_key=fd61846e7c34c1f30a763bda7f71aa3e&query=${coordinates.latitude},${coordinates.longitude}&limit=1`;
      
      const res = await fetch(urlReverse);
      const datos = await res.json();

       let cityData = datos.data[0].locality;

     

      return cityData;
}





