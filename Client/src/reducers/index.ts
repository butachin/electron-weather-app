import { combineReducers } from "redux";
import cityNameState from './CityNameState/CityNameState';
import screenState from "./ScreenState/ScreenState";

const rootReducer = combineReducers({
    cityNameState,
    screenState
});

export default rootReducer;