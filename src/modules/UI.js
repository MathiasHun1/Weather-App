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
    
    image.src = `images/${obj.current.iconName}.png`
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
    statusIcon.src = `images/${obj.today.iconName}.png`
    rainChance.textContent = 'Chance of rain: ' + obj.today.rainChance + ' %'
    maxWind.textContent = 'Max wind: ' + obj.today.maxWind
}

function renderTomorrow(obj) {
    const date = document.querySelector('#tomorrow-date')
    const dayName = document.querySelector('#tomorrow-name')
    const maxTemp = document.querySelector('#tomorrow-maxtemp')
    const minTemp = document.querySelector('#tomorrow-mintemp')
    const statusIcon = document.querySelector('#tomorrow-waether-card-img')
    const rainChance = document.querySelector('#tomorrow-rain')
    const maxWind = document.querySelector('#tomorrow-wind')

    date.textContent = obj.tomorrow.date
    dayName.textContent = format(obj.tomorrow.date, 'eee')
    maxTemp.textContent = 'Max: ' + obj.tomorrow.max_celsius
    minTemp.textContent = 'Min: ' + obj.tomorrow.min_celsius
    statusIcon.src = `images/${obj.tomorrow.iconName}.png`
    rainChance.textContent = 'Chance of rain: ' + obj.tomorrow.rainChance + ' %'
    maxWind.textContent = 'Max wind: ' + obj.tomorrow.maxWind
}

function renderThirdDay(obj) {
    const date = document.querySelector('#thirdDay-date')
    const dayName = document.querySelector('#thirdDay-name')
    const maxTemp = document.querySelector('#thirdDay-maxtemp')
    const minTemp = document.querySelector('#thirdDay-mintemp')
    const statusIcon = document.querySelector('#thirdDay-waether-card-img')
    const rainChance = document.querySelector('#thirdDay-rain')
    const maxWind = document.querySelector('#thirdDay-wind')

    date.textContent = obj.thirdDay.date
    dayName.textContent = format(obj.thirdDay.date, 'eee')
    maxTemp.textContent = 'Max: ' + obj.thirdDay.max_celsius
    minTemp.textContent = 'Min: ' + obj.thirdDay.min_celsius
    statusIcon.src = `images/${obj.thirdDay.iconName}.png`
    rainChance.textContent = 'Chance of rain: ' + obj.thirdDay.rainChance + ' %'
    maxWind.textContent = 'Max wind: ' + obj.thirdDay.maxWind
}

function renderCards(obj) {
    renderToday(obj)
    renderTomorrow(obj)
    renderThirdDay(obj)
}


export {renderHeader, renderCards}