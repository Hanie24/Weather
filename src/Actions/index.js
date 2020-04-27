import TransformForcast from './../Services/TransformForcast';
export const  SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

//action creator
const setCity = value => ({type: SET_CITY, value});
const setForecastData = value => ({ type: SET_FORECAST_DATA, value });

const api_key = '024a9ab4e0f81521324181562040c703';
const url = 'https://api.openweathermap.org/data/2.5/forecast';

export const setSelectedCity = value => {
    return dispatch => {
        const url_forecast = `${url}?q=${value}&appid=${api_key}`;

        //activar en el estado un indicador de busqueda de datos
        dispatch(setCity(value));
        return fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                const forecastData = TransformForcast(weather_data);
                console.log(forecastData);

                // modificar el estado con el resultado de la promise (fetch)
                dispatch(setForecastData({ city: value, forecastData }));
            }
        );
    }
};