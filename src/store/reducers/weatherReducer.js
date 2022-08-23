import {SET_CITY, SET_WEATHER} from "../actions/weatherActions";


const initialState = {
    city: '',
    weatherData: null,
}

export const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CITY:
            return {
                ...state,
                city: action.payload
            }
        case SET_WEATHER:
            return {
                ...state,
                weatherData: action.payload,
            }
        default:
            return state
    }
}