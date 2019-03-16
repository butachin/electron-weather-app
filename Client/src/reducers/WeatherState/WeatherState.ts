import WeatherAction from 'src/actions/WeatherAction/WeatherAction';
import { WeatherActionType } from 'src/actions/WeatherAction/WeatherActionType';
import { Weathers } from 'src/states/WeatherState';

const initialState: Weathers = [
    {
    id: 0,
    type: "",
    temp: 0,
    temp_max: 0,
    temp_min: 0,
    wind: 0,
    description: "",
    icon: "",
    dt_txt: ""
}
]

const weatherState = (state: Weathers = initialState, action: WeatherAction): Weathers => {
    switch(action.type) {
        case WeatherActionType.WEATHER_SUCCEDED:
        return {
            ...state,
            
        }
        default:
        return initialState;
    }
};

export default weatherState;