import { IWeatherCard } from "../WeatherCard/WeatherCard";

export interface IWeatherCardList {
    weatherCards: IWeatherCard[];
}

type WeatherCardListState = IWeatherCardList
export default WeatherCardListState;