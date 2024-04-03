import { weather } from "./weather";
import { format } from 'date-fns'
import { returnIconName } from "../conditions";

function setCountry (input) {
    const country = document.querySelector('#country')
    country.textContent = input
}

function setLocation (obj) {
    const city = document.querySelector('#city')
    const country = document.querySelector('#country')
    city.textContent = obj.city
    country.textContent = obj.country
}

function setTemp(obj, ...args) {
    if (args.includes('header')) {
        const temp = document.querySelector('#temp')
        temp.textContent = obj.current.celsius
    } else if (args.includes('today')) {
        const temp = document.querySelector('#today-temp')
    }
}

function setWind(wind) {
    if (0 <= wind && wind <=10) {
        return 'Wind: none'
    }
    if (10 < wind && wind < 30) {
        return 'Wind: light'
    }
    if (30 <= wind) {
        return 'Wind: hard'
    }
}


function renderHeader (obj) {
    setLocation(obj)
    const temp = document.querySelector('#temp')
    const status = document.querySelector('#current-status')
    const image = document.querySelector('#today-weather-main-img')

    temp.textContent = obj.current.celsius
    status.textContent = obj.current.status
    image.src = `./dist/images/113.png`
}
function renderToday(obj) {
    const date = document.querySelector('#today-date')
    const dayName = document.querySelector('#today-name')
    const maxTemp = document.querySelector('#today-maxtemp')
    const minTemp = document.querySelector('#today-mintemp')
    const statusIcon = document.querySelector('#today-waether-card-img')
    const rainChance = document.querySelector('#today-rain')
    const maxWind = document.querySelector('#today-wind')

    date.textContent = obj.today.date
    dayName.textContent = format(obj.today.date, 'eee')
    maxTemp.textContent = 'Max: ' + obj.today.max_celsius
    minTemp.textContent = 'Min: ' + obj.today.min_celsius
    statusIcon.src = obj.today.icon
    rainChance.textContent = 'Chance of rain: ' + obj.today.rainChance
    maxWind.textContent = 'Max wind: ' + obj.today.maxWind
}

function renderCards(obj) {
}

export {renderHeader, renderToday}