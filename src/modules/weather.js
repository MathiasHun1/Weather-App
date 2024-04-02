let town = 'Budapest'

const get3daysForecast = async () => {
    let response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=fceeec4c1b054e0e95084438240204&q=${town}&days=3&aqi=no&alerts=no`, {
        mode: 'cors'
    })
    let result = await response.json()

    return result
}

const todayWeather = await get3daysForecast()

// const tomorrowWeather = await get3daysForecast('tomorrow')
// const thirdDayWeather = await get3daysForecast('thirdDay')


export { todayWeather }


