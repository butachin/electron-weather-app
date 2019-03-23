import IScreenState from './ScreenState';
import { IWeather } from './WeatherState';

export default interface IRootState {
    screenState: IScreenState;
    weatherState: IWeather[];
}