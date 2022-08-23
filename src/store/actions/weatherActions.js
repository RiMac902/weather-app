import axiosInstance from "../../api/axios";

export const SET_CITY = 'WEATHER::SET_CITY'
export const SET_WEATHER = 'WEATHER::SET_WEATHER'



export const setCity = (city) => {
    return {
        type: SET_CITY,
        payload: city
    }
}
export const setWeather = (weatherData) => {
    return {
        type: SET_WEATHER,
        payload: weatherData
    }

}

export const fetchCurrentWeather = () => async (dispatch, getState) => {
    try {
        const city = getState().weather.city
        const data = await axiosInstance.get(`/weather?q=${city}&appid=${process.env.REACT_APP_CURRENT_WEATHER}`)
        dispatch(setWeather(data.data))
        console.log(data.data)
    } catch (e) {
        console.error('ERROR:', e)
        alert('Error')
    }
}