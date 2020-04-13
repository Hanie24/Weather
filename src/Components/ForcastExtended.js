import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForcasItem from './ForcasItem';
import TransformForcast from './../Services/TransformForcast';
import './Components.css';

/*const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves', 
    'Viernes',
    'Sabado',
    'Domingo',
];

const data = {
    temperature: 10,
    humidity: 10,
    weatherState: 'normal',
    wind: 'normal',
};*/

const api_key = '024a9ab4e0f81521324181562040c703';
const url = 'https://api.openweathermap.org/data/2.5/forecast';

class ForcastExtended extends Component{

    constructor(){
        super();
        this.state = { forecastData: null }

    }

    componentDidMount() {
        this.updateCity(this.props.city)
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.city !== this.props.city){
            this.setState({forecastData: null })
            this.updateCity(nextProps.city);
        }
    }
    
    updateCity = city => {
        const url_forecast = `${url}?q=${city}&appid=${api_key}`;

        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                console.log(weather_data);
                const forecastData = TransformForcast(weather_data);
                console.log(forecastData);
                this.setState({ forecastData });
            }
        );
    }

    renderForcasItemDays(forecastData){
        return forecastData.map( forecast => (
            <ForcasItem 
                key={`${forecast.weekDay}${forecast.hour}`} 
                weekDay={forecast.weekDay} 
                hour={forecast.hour} 
                data={forecast.data}/>));
    }

    renderProgress = () => {
        return <h3>Cargando Pronostico Extendido...</h3>;
    }

    render(){
        const { city } = this.props;
        const { forecastData } = this.state;
        return(
            <div>
                <h2 className="forcast-title">Pronóstico Extendido {city}</h2>
                { forecastData ?
                    this.renderForcasItemDays(forecastData) :
                    this.renderProgress()
                }
            </div>
        );
    }
}

ForcastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForcastExtended;