import React from 'react';
import ExtraInformation from './ExtraInformation';
import WeatherTemperature from './WeatherTemperature';

const WeatherLocation = () => {
    return (
        <div>
            <WeatherTemperature/>
            <ExtraInformation humidity={80} wind={'10 m/s'} />
        </div>
    );
}

export default WeatherLocation;