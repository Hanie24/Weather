import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './style.css';
//import{ SUN }from './../../Constants/Weathers';

const location = 'Buenos Aires';
const api_key = '024a9ab4e0f81521324181562040c703';
const url_base_weather = 'api.openweathermap.org/data/2.5/weather';

const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;

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
        /*fetch(api_weather, {
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then((response) => response.json())
        .then((data) => {console.log(data);});*/
        fetch(api_weather).then( resolve => {
            
            return resolve.json();
        }).then(data => {
            console.log(data);
            debugger;
        });

        console.log('Actualizado');
        this.setState({
            data: data2,
        })
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
