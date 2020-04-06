import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const WeatherTemperature = ({ temperature, weatherState}) => {
    WeatherTemperature.propTypes = {
        temperature: PropTypes.number
    };
    return(
        <div className="weatherTemperatureCont">
            <span className="temperature"> { `${temperature} `} </span>
            <span className="temperatureType"> {`Cº`} </span>
        </div>
    );
    
}

export default WeatherTemperature;