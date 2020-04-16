import { combineReducers } from 'redux';
import { cities } from './Cities';
import { city } from './City';

export default combineReducers({
    cities,
    city
});