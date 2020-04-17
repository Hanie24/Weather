import React from 'react';
import PropTypes from 'prop-types';
import ForcasItem from './ForcasItem';
import './Components.css';

const renderForcasItemDays = (forecastData) => {
    return forecastData.map( forecast => (
        <ForcasItem 
            key={`${forecast.weekDay}${forecast.hour}`} 
            weekDay={forecast.weekDay} 
            hour={forecast.hour} 
            data={forecast.data}/>));
}

const renderProgress = () => {
    return <h3>Cargando Pronostico Extendido...</h3>;
}

const ForcastExtended = ({ city, forecastData }) => (
    <div>
        <h2 className="forcast-title">Pronóstico Extendido {city}</h2>
        { forecastData ?
            renderForcasItemDays(forecastData) :
            renderProgress()
        }
    </div>
);

ForcastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array,
}

export default ForcastExtended;