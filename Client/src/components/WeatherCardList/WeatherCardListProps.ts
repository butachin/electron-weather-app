import { Weathers } from 'src/states/WeatherState';

export interface IWeatherCardListConnectedProps {
  weatherState: Weathers;
}

type WeatherCardListConnectedProps = IWeatherCardListConnectedProps
export default WeatherCardListConnectedProps;