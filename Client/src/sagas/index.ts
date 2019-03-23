import { all } from 'redux-saga/effects';
import { WeatherSaga } from './Weather/WeatherSaga';

export default function* rootSaga() {
    yield all( [
        ...WeatherSaga
    ]);
}