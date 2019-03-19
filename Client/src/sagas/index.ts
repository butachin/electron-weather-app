import { all } from 'redux-saga/effects';
// import { ScreenStateSaga } from './ScreenState/ScreenStateSaga';
import { WeatherSaga } from './Weather/WeatherSaga';

export default function* rootSaga() {
    yield all( [
//         ...ScreenStateSaga,
        ...WeatherSaga
    ]);
}