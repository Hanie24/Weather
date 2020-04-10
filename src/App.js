import React, { Component } from 'react';
import LocationList from './Components/LocationList';
import './App.css';

const cities = [
  'Kubul, AF',
  'City of Brussels, BE',
  'People’s Republic of China, CN',
  'Bogota, COL',
  'Ciudad de Mexico, mx',
  'Lims, pe',
];

class App extends Component{
  render(){
    return (
      <div className="App">
        <LocationList cities={cities}/>
      </div>
    );
  }
}

export default App;
