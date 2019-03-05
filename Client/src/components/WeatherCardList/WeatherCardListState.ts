import { IWeatherCard } from '../WeatherCard/WeatherCardProps';


export interface IWeatherCardList {
    weatherCards: IWeatherCard[];
}

type WeatherCardListState = IWeatherCardList
export default WeatherCardListState;