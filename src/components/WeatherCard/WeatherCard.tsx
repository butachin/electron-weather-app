import * as React from 'react';
import {Panel} from 'react-bootstrap';

export interface IWeatherCard {
    dt: number,
    main: {
        temp: number,
        temp_min: number,
        temp_max: number,
        pressure: number,
        sea_level: number,
        grnd_level: number,
        humidity: number,
        temp_kf: number
    },
    weather: [
        {
            id: number,
            main: string,
            description: string,
            icon: string
        }
    ],
    dt_txt: string
}

class WeatherCard extends React.Component<IWeatherCard, any> {
    constructor(props: any) {
        super(props);
    }
    public render() {
        return (
            <div>
                <Panel className="Panel">
                <Panel.Heading>日時: {this.props.dt_txt}</Panel.Heading>
                <Panel.Body/>
                </Panel>
            </div>
        )
    }
}

export default WeatherCard;