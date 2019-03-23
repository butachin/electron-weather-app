import { expectSaga } from 'redux-saga-test-plan';
import { GetResponse } from '../../gRPC/proto/weather_pb';
import { weatherRequest } from './WeatherSaga';
import { WeatherActionType } from 'src/actions/WeatherAction/WeatherActionType';

describe('WeatherSaga', () => {
    test('getWeather関数が動く', () => {
        const res = new GetResponse;
        const api = {
            getWeather: (cityName: string) => res
        };

        return expectSaga(weatherRequest, api)
            .put({ type: WeatherActionType.WEATHER_SUCCEDED, res })
            .dispatch({ type: WeatherActionType.WEATHER_REQUEST })
            .run();
    });
});