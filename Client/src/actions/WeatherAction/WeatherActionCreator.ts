import * as WeatherActions from './WeatherAction';
import { WeatherActionType } from './WeatherActionType';
import { Weathers } from 'src/states/WeatherState';

export const weatherRequest = (cityName: string): WeatherActions.WeatherRequestAction => ({
    type: WeatherActionType.WEATHER_REQUEST,
    cityName,
});

export const weatherSucceded = (weatherList: Weathers): WeatherActions.WeatherSuccededAction => ({
    type: WeatherActionType.WEATHER_SUCCEDED,
    weatherList,
});

export const weatherFailed = (): WeatherActions.WeatherFailedAction => ({
    type: WeatherActionType.WEATHER_FAILED,
});