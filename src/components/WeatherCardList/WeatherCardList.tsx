import * as React from 'react';
import * as request from "superagent";
import WeatherCard, { IWeatherCard } from '../WeatherCard/WeatherCard';
import * as dotenv from 'dotenv';

dotenv.config();

interface IWeatherCardList {
    weatherCards: IWeatherCard[];
}

class WeatherCardList extends React.Component<any, IWeatherCardList> {
    constructor(props: any) {
        super(props)
        this.state = {
            weatherCards: []
        };
    }

    public componentWillMount() {
        request
          .get(
            "http://api.openweathermap.org/data/2.5/forecast"
          )
          .query({
              q: 'Hakodate',
              appid: process.env.REACT_APP_API_KEY
          })
          .then(response => response.body.list)
          .then(body => {
              console.log(body)
              this.setState({
                weatherCards: body,
              })
              console.log(JSON.stringify(this.state.weatherCards))
          }
          )
          .catch(error => {
            console.log(error);
            throw error;
          });
      }
      public render() {
        const resultNodes = this.state.weatherCards.map(weatherCard => {
          return <WeatherCard key={weatherCard.dt} {...weatherCard} />;
        });

        return <ul>{resultNodes}</ul>;
      }
} 

export default WeatherCardList;