import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import './styles.css';
import {
    CLOUD,
    SUN,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE,
} from './../../../Constants/Weathers';

const icons = {
    [CLOUD]: 'cloud',
    [SUN]: 'day-sunny',
    [RAIN]: 'rain',
    [SNOW]: 'snow',
    [THUNDER]: 'day-thundestore',
    [DRIZZLE]: 'day-showers',
}; 

const getWeatherIcon = (weatherState) => {
    const icon = icons[weatherState];
    if(icon){
        return <WeatherIcons name={icon} size='2x'/>
    }else{
        return <WeatherIcons name={'day-sunny'} size='2x'/>
    }
}

const WeatherTemperature = ({ temperature, weatherState}) => {
    WeatherTemperature.propTypes = {
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
    };
    return(
        <div className="weatherTemperatureCont">
            {
                getWeatherIcon(weatherState)
            }
            <span className="temperature"> { `${temperature} `} </span>
            <span className="temperatureType"> {`Cº`} </span>
        </div>
    );
    
}

export default WeatherTemperature;