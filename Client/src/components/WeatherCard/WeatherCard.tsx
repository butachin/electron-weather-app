import * as React from "react";
import { Card, Avatar } from "antd";
import "../../css/WeatherCard.css";

const { Meta } = Card;

export interface IWeatherCard {
  id: number;
  type: string;
  temp: number;
  temp_max: number;
  temp_min: number;
  wind: number;
  description: string;
  icon: string;
  dt_txt: string;
}

class WeatherCard extends React.Component<IWeatherCard, any> {
  constructor(props: any) {
    super(props);
  }

  private kelvinToCelsius = (temp: number): number => Math.round(temp - 273.15);

  public render() {
    return (
      <div>
        <Card className="Card">
          <Meta
            avatar={<Avatar src={`http://openweathermap.org/img/w/${this.props.icon}.png`}size="large"/>}
            title={
              <div>
                <p>{this.props.type}</p>
                <h3>{this.kelvinToCelsius(this.props.temp) + "°C"}</h3>
              </div>
            }
            description={this.props.dt_txt}
          />
        </Card>
      </div>
    );
  }
}

export default WeatherCard;
