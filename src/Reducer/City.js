import { SET_CITY } from './../Actions';

export const city = (state, action) => {
    switch(action.type){
        case SET_CITY: 
            return { ...state, city: action.value }
        default:
            return state;
    }
}