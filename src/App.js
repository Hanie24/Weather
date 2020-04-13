import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Col, Row } from 'react-flexbox-grid';
import LocationList from './Components/LocationList';
import ForcastExtended from './Components/ForcastExtended';
import { setCity } from './Actions';
import { store } from './Store';
import './App.css';

const cities = [
  'Buenos Aires, ar',
  'City of Brussels, BE',
  'China, cn',
  'Bogota, col',
  'Ciudad de Mexico, mx',
  'Lima, pe',
];

class App extends Component{

  constructor(){
    super();
    this.state = { city: null }
  }

  handleSelectedLocation = city => {
    this.setState({ city });
    console.log(`handleSelectedLocation ${city}` );

    store.dispatch(setCity(city));
  }
  render(){
    const {city} = this.state;
    return (
      <Grid>
        <Row>
          <AppBar position='sticky'>
            <Toolbar>
              <Typography variant='title' color='inherit'>
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList cities={cities} 
              onSelectedLocation={this.handleSelectedLocation}/>
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="details">
                { 
                  city ? 
                    <ForcastExtended city={city}/> :
                    null
                }
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
