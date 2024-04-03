import { createWeatherObj } from "./modules/weather"
import { renderHeader, renderToday } from "./modules/UI"



const headerObj = await createWeatherObj('london')
console.log(headerObj)
renderHeader(headerObj)
renderToday(headerObj)