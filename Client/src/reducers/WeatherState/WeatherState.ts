import WeatherAction from 'src/actions/WeatherAction/WeatherAction';
import { WeatherActionType } from 'src/actions/WeatherAction/WeatherActionType';
import { Weathers } from 'src/states/WeatherState';

const initialState: Weathers = []

const weatherState = (state: Weathers = initialState, action: WeatherAction): Weathers => {
    switch(action.type) {
        case WeatherActionType.WEATHER_SUCCEDED:
        return [
            ...state.slice(state.length),
            ...action.weatherList
        ]
        case WeatherActionType.WEATHER_FAILED:
        return initialState;
        default:
        return initialState;
    }
};

export default weatherState;