import { returnIconName } from "../conditions"

const get3daysForecast = async (town) => {
    //fetch data and format it for easier usage in the app
    let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=fceeec4c1b054e0e95084438240204&q=${town}&days=3&aqi=no&alerts=no`, {
        mode: 'cors'
    })
    let result = await response.json()

    const currentWeather = result.current
    const todayWeather = result.forecast.forecastday[0]
    const tomorrowWeather = result.forecast.forecastday[1]
    const thirdDayWeather = result.forecast.forecastday[2]
    const location = result.location
    return { currentWeather, todayWeather, tomorrowWeather, thirdDayWeather, location }
}


async function createWeatherObj(town) {
    try {
        //formatting the input
        if (town === undefined || town === '') {
            town = 'Budapest'
        } else {
            town = town.trim()
        }
        //fetching the data and store it in an object
        const weather = await get3daysForecast(town)
        const headerObj = {
            city: weather.location.name,
            country : weather.location.country,
    
            current: {
                celsius: weather.currentWeather.temp_c,
                wind: weather.currentWeather.wind_kph,
                cloud: weather.currentWeather.cloud,
                status: weather.currentWeather.condition.text,
                iconName: returnIconName(weather.currentWeather.condition.code),
            },
    
            today: {
                date: weather.todayWeather.date,
                max_celsius: weather.todayWeather.day.maxtemp_c,
                min_celsius: weather.todayWeather.day.mintemp_c,
                status: weather.todayWeather.day.condition.text,
                iconName: returnIconName(weather.todayWeather.day.condition.code),
                rainChance: weather.todayWeather.day.daily_chance_of_rain,
                maxWind: weather.todayWeather.day.maxwind_kph,
            },
            tomorrow: {
                date: weather.tomorrowWeather.date,
                max_celsius: weather.tomorrowWeather.day.maxtemp_c,
                min_celsius: weather.tomorrowWeather.day.mintemp_c,
                status: weather.tomorrowWeather.day.condition.text,
                iconName: returnIconName(weather.tomorrowWeather.day.condition.code),
                rainChance: weather.tomorrowWeather.day.daily_chance_of_rain,
                maxWind: weather.tomorrowWeather.day.maxwind_kph,
            },
            thirdDay: {
                date: weather.thirdDayWeather.date,
                max_celsius: weather.thirdDayWeather.day.maxtemp_c,
                min_celsius: weather.thirdDayWeather.day.mintemp_c,
                status: weather.thirdDayWeather.day.condition.text,
                iconName: returnIconName(weather.thirdDayWeather.day.condition.code),
                rainChance: weather.thirdDayWeather.day.daily_chance_of_rain,
                maxWind: weather.thirdDayWeather.day.maxwind_kph,
            }
        } 
    
        return headerObj 
    } catch (error) {
        alert('something went wrong')
    }
}

function findIconCode() {

}

export { get3daysForecast, createWeatherObj }


