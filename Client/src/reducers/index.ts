import { combineReducers } from "redux";
import cityNameState from './CityNameState/CityNameState';
import screenState from "./ScreenState/ScreenState";
import weatherState from "./WeatherState/WeatherState";

const rootReducer = combineReducers({
    cityNameState,
    screenState,
    weatherState
});

export default rootReducer;