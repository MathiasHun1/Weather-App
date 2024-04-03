import { createWeatherObj } from "./modules/weather"
import { renderHeader, renderCards } from "./modules/UI"

const submitButton = document.querySelector('#submit-button')
const inputText = document.querySelector('#input-text')

let city = ''
let headerObj = await createWeatherObj(city)

renderHeader(headerObj)
renderCards(headerObj)

submitButton.addEventListener('click', async (e)=> {
    e.preventDefault()
    city = inputText.value
    headerObj = await createWeatherObj(city)
    renderHeader(headerObj)
    renderCards(headerObj)
    inputText.value = ''
})