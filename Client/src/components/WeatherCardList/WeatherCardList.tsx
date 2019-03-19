import * as React from "react";
import WeatherCard from "../WeatherCard/WeatherCard";
import { Jumbotron　} from 'react-bootstrap';
import WeatherCardListState from './WeatherCardListState';
import WeatherCardListConnectedProps from './WeatherCardListProps';

class WeatherCardList extends React.Component<WeatherCardListConnectedProps, WeatherCardListState> {
  constructor(props: WeatherCardListConnectedProps) {
    super(props);
  }

  public render() {
    const resultNodes = this.props.weatherState.map(weatherCard => {
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
