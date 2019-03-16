export interface IWeather {
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

  export type Weathers = IWeather[];