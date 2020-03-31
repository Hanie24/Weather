import React from 'react';

const Location = ({city}) => {
    //Destructuring
    //esto es igua a const city = props.city; esto:
    //const { city } = props
    
    return(
        <div>
            <h1>{city}</h1>
        </div>
    );
};

export default Location;