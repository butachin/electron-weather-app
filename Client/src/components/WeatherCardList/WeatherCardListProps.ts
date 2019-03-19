import { ICityNameState } from 'src/states/CityNameState';
import { Weathers } from 'src/states/WeatherState';

export interface IWeatherCardListConnectedProps {
  cityNameState: ICityNameState;
  weatherState: Weathers;
}

type WeatherCardListConnectedProps = IWeatherCardListConnectedProps
export default WeatherCardListConnectedProps;