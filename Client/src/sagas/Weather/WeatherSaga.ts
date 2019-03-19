import { call, put, takeEvery } from 'redux-saga/effects';
import { WeatherRequestAction } from 'src/actions/WeatherAction/WeatherAction';
import * as WeatherPb from 'src/gRPC/proto/weather_pb';
import { getWeather } from 'src/gRPC/client/WeatherClient';
import { weatherSucceded, weatherFailed } from 'src/actions/WeatherAction/WeatherActionCreator';
import { WeatherActionType } from 'src/actions/WeatherAction/WeatherActionType';
import { Weathers } from 'src/states/WeatherState';

function* weatherRequest(action: WeatherRequestAction) {
    const response = yield call(getWeather, action.cityName);
    const weatherList = response.result.getWeatherlistList();
    const weathers: Weathers = yield mapWeatherPbToWeathers(weatherList);

    if(weatherList) {
        yield put(weatherSucceded(weathers));
    } else {
        yield put(weatherFailed());
    }
}

const mapWeatherPbToWeathers = (weatherPb: WeatherPb.Weather[]): Weathers => {
    const weathers: Weathers = weatherPb.map(w => (
        {
            id: w.getId(),
            type: w.getType(),
            temp: w.getTemp(),
            temp_max: w.getTempmax(),
            temp_min: w.getTempmin(),
            wind: w.getWind(),
            description: w.getDescription(),
            icon: w.getIcon(),
            dt_txt: w.getDttext()
        }
    ));
    return weathers
}

export const WeatherSaga = [
    takeEvery(WeatherActionType.WEATHER_REQUEST, weatherRequest)
];