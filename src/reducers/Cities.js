import { createSelector } from 'reselect';
import { SET_FORECAST_DATA } from '../Actions';

export const cities = (state = {}, action) => {
    switch (action.type) {
        case SET_FORECAST_DATA:
            const { city, forecastData } = action.value;
            return { ...state, [city]: { forecastData }};

        default:
            return state;
    }
}

export const getForecastDataFromCities = 
    createSelector((state, city) => state[city] && state[city].forecastData, forecastData => forecastData);