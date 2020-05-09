import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Map from './Map';
import Rain from '../../Assets/Video/Rain.mp4'
import './Weather.scss'



const Weather = (props) => {

    const fetchWeatherDetails = (cooridinates) => {
        console.log('Hi ', cooridinates)
    }

    return (
        <div className="weather-container">
            <h1>Todays Weather</h1>
        {/* {Rain} */}
            <video autoPlay muted loop>
                <source src={Rain} type="video/mp4" />
                Your browser does not support HTML5 video.
            </video>
            <Map 
                setLocation = { props.setLocation }
                location = { props.location }
                fetchWeather = { props.fetchWeather }
                weatherDetails = { props.Weather }
            >

            </Map>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state);

    return {
        Weather: state.WeatherReducer.weather,
        location: state.WeatherReducer.location 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        "fetchWeather": (cooridinates) => { dispatch({ type:'FETCH_WEATHER', location: cooridinates }) },
        "setLocation": (cooridinates) => { dispatch({ type: 'SET_LOCATIONS', location: cooridinates}) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Weather);