import { ICityNameState } from './CityNameState';
import IScreenState from './ScreenState';
import { IWeather } from './WeatherState';

export default interface IRootState {
    cityNameState: ICityNameState;
    screenState: IScreenState;
    weatherState: IWeather[];
}