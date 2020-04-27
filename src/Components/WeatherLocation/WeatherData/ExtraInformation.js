import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const ExtraInformation = ({ humidity, wind }) => {
    return(
        <div className="weatherInfoCont">
            <p className="extraInfo">{`Humedad: ${humidity} %`}
                <span>{`Vientos ${wind}`}</span>
            </p>
        </div>
    );
}

ExtraInformation.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
};
export default ExtraInformation;