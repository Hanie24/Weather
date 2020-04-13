import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from './../WeatherLocation/WeatherData';

/*const data = {
    temperature: 10,
    humidity: 10,
    weatherState: 'normal',
    wind: 'normal',
}*/

const ForcasItem = ({ weekDay, hour, data }) => {
    return(
        <div>
            <h2>{weekDay} - {hour} hrs</h2>
            <WeatherData data={data}/>
        </div>
    );
}

ForcasItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
}

export default ForcasItem;