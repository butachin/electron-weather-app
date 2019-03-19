import { IWeather } from 'src/states/WeatherState';

export interface IWeatherCardList {
    weatherCards: IWeather[];
}

type WeatherCardListState = IWeatherCardList
export default WeatherCardListState;