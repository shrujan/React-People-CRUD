import axios from 'axios';


const apiKey = "9c78c9658cae5c45a2c625f8b6685b16";

export const  fetchWeatherData = async (lat = 1, lon = 2) => {
    let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=` + apiKey + '&units=metric';
    
   return axios.get(url, {"headers": {
        
    }})
    .then((resp) => {
        console.log(resp);
        return resp.data
    })
   
}

export const fetGeoData = () => {
    const url = ""   
}