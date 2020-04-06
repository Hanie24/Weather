import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Location = ({city}) => {
    //Destructuring
    //esto es igua a const city = props.city; esto:
    //const { city } = props
    
    return(
        <div className="locationCont">
            <h1>{city}</h1>
        </div>
    );
};

Location.propTypes = {
    city: PropTypes.string.isRequired,
}

export default Location;