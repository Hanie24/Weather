import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { PropTypes } from 'prop-types';
import GetCityUrl from './../../Services/GetCityUrl';
import TransformWeather from './../../Services/TransformWeather';
import Location from './Location';
import WeatherData from './WeatherData';
import './WeatherLocation.css';

class WeatherLocation extends Component {
    constructor(props){
        super(props);
        const { city } = props;
        this.state = {
            city,
            data: null,
        }; 
    }

    componentDidMount() {
        this.handleUpdateClick();
    }

    handleUpdateClick = () => {
        const api_weather = GetCityUrl(this.state.city);
        fetch(api_weather).then( resolve => {
            return resolve.json();
        }).then(data => {
            const newWeather = TransformWeather(data);
            this.setState({
                data: newWeather
            });
        });

    }

    render(){
        const { onWeatherLocationClick } = this.props;
        const { city, data } = this.state;
        return(
            <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
                <Location city={city}/>
                { data ? <WeatherData data={data}/> : <CircularProgress size={50}/>}
            </div>
        );
    }
}

WeatherLocation.protoTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
}

export default WeatherLocation;
