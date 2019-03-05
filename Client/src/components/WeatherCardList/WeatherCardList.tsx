import * as React from "react";
import WeatherCard from "../WeatherCard/WeatherCard";
import { Jumbotron　} from 'react-bootstrap';
import { getWeather } from 'src/gRPC/client/WeatherClient';
import * as WeatherPb from 'src/gRPC/proto/weather_pb';
import WeatherCardListConnectedProps from './WeatherCardListProps';
import WeatherCardListState from './WeatherCardListState';
import { IWeatherCard } from '../WeatherCard/WeatherCardProps';

class WeatherCardList extends React.Component<WeatherCardListConnectedProps, WeatherCardListState> {
  constructor(props: any) {
    super(props);
    this.state = {
      weatherCards: []
    };
  }

  public async componentDidMount() {
    const { cityNameState } = this.props;
    const res = await getWeather(cityNameState.cityName)
    const weatherList: WeatherPb.Weather[] = await res.result.getWeatherList();

    const buf = weatherList.map(weather =>{
      const a: IWeatherCard = {
        id: weather.getId(),
        type: weather.getType(),
        temp: weather.getTemp(),
        temp_max: weather.getTempmax(),
        temp_min: weather.getTempmin(),
        wind: weather.getWind(),
        description: weather.getDescription(),
        icon: weather.getIcon(),
        dt_txt: weather.getDttext()
      }
      this.state.weatherCards.push(a)
    });
    console.log(buf);
    this.setState ({ weatherCards: this.state.weatherCards});
  }

  public render() {
    const resultNodes = this.state.weatherCards.map(weatherCard => {
      return <WeatherCard data-test='cardList' key={weatherCard.id} {...weatherCard} />;
    });

    return (
    <div>
        <Jumbotron>
          <h1>函館お天気情報</h1>
          <p>Hakodate Weather Information</p>
        </Jumbotron>
        <ul>{resultNodes}</ul>
    </div>
    )};
}

export default WeatherCardList;
