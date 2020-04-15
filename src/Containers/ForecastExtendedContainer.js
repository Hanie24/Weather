import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ForcastExtended from './../Components/ForcastExtended';

class ForecastExtendedContainer extends Component {
    render() {
        return (
            this.props.city &&
            <ForcastExtended city={this.props.city}/>
        );
    }
}

ForecastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({ city: state.city });

export default connect(mapStateToProps, null)(ForecastExtendedContainer);