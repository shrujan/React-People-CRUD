import React, { useState, useEffect } from 'react';
import './Map.scss'


const Map = (props) => {
    
    useEffect(() => {

        let map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: props.location[0], lng: props.location[1]},
            zoom: 6
          });
        
        // let geocoder = new google.maps.Geocoder;
        let infoWindow = new google.maps.InfoWindow;

        console.log('hey')

          // Configure the click listener.
        map.addListener('click', function(mapsMouseEvent) {
            // Close the current InfoWindow.
            infoWindow.close();
            
            // Create a new InfoWindow.
            infoWindow = new google.maps.InfoWindow({position: mapsMouseEvent.latLng});
            infoWindow.setContent(mapsMouseEvent.latLng.toString());

            props.setLocation([mapsMouseEvent.latLng.lat(), mapsMouseEvent.latLng.lng()]);

            // let latlng = {lat: parseFloat(mapsMouseEvent.latLng.lat()), lng: parseFloat(mapsMouseEvent.latLng.lng())};
            // geocodeLatLng(geocoder, map, infoWindow, latlng);

            infoWindow.open(map);
          });

          // Try HTML5 geolocation.
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
              var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
              };
  
              props.setLocation([position.coords.latitude, position.coords.longitude]);

              
              
              infoWindow.setPosition(pos);
              infoWindow.setContent('Location found.');
              infoWindow.open(map);
              map.setCenter(pos);
            }, function() {
              handleLocationError(true, infoWindow, map.getCenter(), map);
            });
          } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map.getCenter(), map);
          }

    }, [])

    function handleLocationError(browserHasGeolocation, infoWindow, pos, map) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }
      
    const generateWeatherDOM = (details) => {
        let weatherArr =  Object.entries(details);
        
        return (
            <div className="breakdown">
                <div className="row special">
                    <div className="col1">Name</div>
                    <div className="col2">Details</div>
                </div>
                {
                    weatherArr.map((det, index) => {
                        return (
                            <div className="row" key={index}>
                                <div className="col1">{det[0]}</div>
                                <div className="col2"> {det[1]}</div>
                            </div>
                        )
                    })

                }
                
            </div>
        )
    }

    const displayCoordinnates = () => {
        let loc = props.location;
        let str = ''
        if (props.location.length > 0) {
            str += "Lat = " + parseFloat(loc[0]).toFixed(2) + ' Lon= ' + parseFloat(loc[1]).toFixed(2);            
          }

        return (
            <span>
                { str }
            </span>
        )
    }
    return (
        <div className="map-container">
            <div className="map" id="map" >
                map shown here 
            </div>

            <div className="weather-details">
                <div className="coordinate"> 
                    Coordinates:  { displayCoordinnates() }
                    <button onClick={() =>  props.fetchWeather(props.location) }> Fetch Weather Details</button>
                </div>
                <div className="details">
                    <div className="header">
                        <h1>Weather details</h1>
                    </div>
                    {/* <div className="breakdown"> */}
                    {generateWeatherDOM(props.weatherDetails)}
                    {/* </div> */}
                </div>
            </div>



        </div>
        
    )
}

function geocodeLatLng(geocoder, map, infowindow, latlng) {
   
    geocoder.geocode({'location': latlng}, function(results, status) {
      if (status === 'OK') {
        if (results[0]) {
          map.setZoom(11);
          var marker = new google.maps.Marker({
            position: latlng,
            map: map
          });
          infowindow.setContent(results[0].formatted_address);
          infowindow.open(map, marker);
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }
    });
  }

export default Map;