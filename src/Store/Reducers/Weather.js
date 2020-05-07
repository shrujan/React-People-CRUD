const weatherState = {
    weather: {},
    location: [21.72, 78.90]
}

const WeatherReducer = (state = weatherState, action) => {
    console.log('123')
    if (action.type === 'SAVE_WEATHER') {
        console.log('SAVE_WEATHER');

        let weatherData = {
            "Min Temp": action.value.main.temp_min,
            "Max Temp": action.value.main.temp_max,
            "Temperature": action.value.main.temp,
            "Humidity": action.value.main.humidity,
            "Description": action.value.weather[0].description,
            "Weather Type": action.value.weather[0].main,
            "Wind Speed":  action.value.wind.speed
        };
        // state.weatherState.weather = action.weather;
        state = {
            ...state,
            weather: weatherData
        }
    }

    if (action.type === 'SET_LOCATIONS') {
        console.log('setLoc')
        state = {
            ...state,
            location: action.location
        }
    }

    return state;
}

export default WeatherReducer;