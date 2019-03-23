import { combineReducers } from "redux";
import screenState from "./ScreenState/ScreenState";
import weatherState from "./WeatherState/WeatherState";

const rootReducer = combineReducers({
    screenState,
    weatherState
});

export default rootReducer;