import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';

const LocationList = ({ cities }) => {
    console.log(cities);
    return(
        <div>
            <WeatherLocation city={'Puebla, mex'}/>
            <WeatherLocation city={'Merida, mex'}/>
            <WeatherLocation city={'Poza Rica, mex'}/>
        </div>
    );
}

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
};

export default LocationList;