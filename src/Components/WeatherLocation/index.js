import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './style.css';
//import{ SUN }from './../../Constants/Weathers';

const data = {
    temperature: 8,
    //weatherState: SUN,
    humidity: 10,
    wind: '10 m/s',
}

const data2 = {
    temperature: 15,
    //weatherState: SUN,
    humidity: 20,
    wind: '8 m/s',
}

class WeatherLocation extends Component {

    constructor(){
        super();
        this.state = {
            city: 'Puebla',
            data: data,
        }
    }
    
    handleUpdateClick = () => {
        console.log('Actualizado');
        this.setState({
            data: data2,
        });
    }

    render(){
        const { city, data } = this.state;
        return(
            <div className="weatherLocationCont">
                <Location city={city}/>
                <WeatherData data={data}/>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }
}

export default WeatherLocation;