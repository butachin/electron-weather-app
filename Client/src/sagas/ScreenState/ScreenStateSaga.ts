// import ScreenAction from "src/actions/ScreenStateAction/ScreenAction";
// import { call, put, takeEvery } from 'redux-saga/effects';
// import { GetResponse } from 'src/gRPC/proto/weather_pb';
// import { getWeather } from 'src/gRPC/client/WeatherClient';
// import { switchSeachScreen, switchResultScreen } from 'src/actions/ScreenStateAction/ScreenActionCreater';

// function* switchResultRequest(action: ScreenAction) {
//     const { responce }: {responce: GetResponse} = yield call(getWeather, "Hakodate");
//     const weatherList = responce.getWeatherList();

//     if(weatherList != null) {
//         yield put(switchResultScreen());
//     } else {
//         yield put(switchSeachScreen());
//     }
// }

// export const ScreenStateSaga = [
//     takeEvery(switchResultScreen, switchResultRequest)
// ]