import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';
import './Components.css';

const LocationList = ({ cities, onSelectedLocation }) => {
    const handleWeatherLocationClick = city => {
        console.log('handleWeatherLocationClick');
        onSelectedLocation(city);
    }
    const ListComponents = cities => (
        cities.map( city => 
            (
                <WeatherLocation 
                    key={city} 
                    city={city}
                    onWeatherLocationClick = {() => handleWeatherLocationClick(city)} />))
    );

    return(
        <div className="location-list">
            {ListComponents(cities)}
        </div>
    );
}

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
};

export default LocationList;