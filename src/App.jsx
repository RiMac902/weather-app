import React, {useEffect} from 'react';
import {styled} from '@mui/system';
import {Button, Card, CardContent, CardMedia, TextField, Typography} from "@mui/material";
import {connect} from "react-redux";
import {fetchCurrentWeather, setCity, setWeather} from "./store/actions/weatherActions";


const App = (props) => {

    // const [city, setCity] = useState('')
    // const [weatherData, setWeatherData] = useState(null)

const fetchCurrWeather = () => {
    props.fetchCurrentWeather()
}

useEffect(() => {
    console.log(process.env)
},[])

    return (
        <GlobalWrap>
            <WrappedA>
                <Typography variant={'h1'}>Weather</Typography>
            </WrappedA>
            <WrappedC>
                <Card sx={{width: 800, margin: 5}}>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://source.unsplash.com/random"
                        alt="wheather"
                    />
                    <CardContent>
                        <WrappedB>
                            <TextField id="outlined-basic" label="City:" variant="outlined" value={props.city}
                                       onChange={e => props.setCity(e.target.value)}/>
                            <ButtonOut variant="contained" onClick={fetchCurrWeather} disabled={props.city.trim().length == 0} >GET</ButtonOut>
                        </WrappedB>

                        {
                            props.weatherData && <div>
                                <Typography gutterBottom variant="h5" component="div">
                                    Temperature: {Math.round(props.weatherData.main.temp - 273)}°C
                                </Typography>
                                <Typography gutterBottom variant="h5" component="div">
                                    Country: {props.weatherData.sys.country}
                                </Typography>
                                <Typography gutterBottom variant="h5" component="div">
                                    City: {props.weatherData.name}
                                </Typography>
                            </div>
                        }


                    </CardContent>
                </Card>
            </WrappedC>
        </GlobalWrap>
    );
};


const mapStateToProps = (state) => {
    return {
        city: state.weather.city,
        weatherData: state.weather.weatherData,
    }
}

const mapDispatchToProps = {
    setCity,
    setWeather,
    fetchCurrentWeather,
}

const GlobalWrap = styled('div')({
    height: '100vh',
    width: '100wh',
    justifyContent: 'center',
    alignItems: "center",
})
const ButtonOut = styled(Button)({
    margin: '5px',
})
const WrappedA = styled('div')({
    display: 'flex',
    justifyContent: 'center',
})
const WrappedB = styled('div')({
    display: 'flex',
    justifyContent: 'center',
})
const WrappedC = styled('div')({
    display: 'flex',
    justifyContent: 'center',
})

export default connect(mapStateToProps, mapDispatchToProps)(App);