import { call, put, takeEvery } from 'redux-saga/effects';
import { WeatherRequestAction } from 'src/actions/WeatherAction/WeatherAction';
import * as WeatherPb from 'src/gRPC/proto/weather_pb';
import { getWeather } from 'src/gRPC/client/WeatherClient';
import { weatherSucceded, weatherFailed } from 'src/actions/WeatherAction/WeatherActionCreator';
import { WeatherActionType } from 'src/actions/WeatherAction/WeatherActionType';

function* weatherRequest(action: WeatherRequestAction) {
    const {response}: {response: WeatherPb.GetResponse} = yield call(getWeather, "Hakodate")
    const weatherList = response.getWeatherList()

    if(weatherList) {
        yield put(weatherSucceded());
    } else {
        yield put(weatherFailed());
    }
}

export const WeatherSaga = [
    takeEvery(WeatherActionType.WEATHER_REQUEST, weatherRequest)
];