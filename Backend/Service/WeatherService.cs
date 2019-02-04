using System.Collections.Generic;
using Proto.Weather;
using Backend.Models;
using Backend.Repositories;
using Backend.Service.Interface;

namespace Backend.Service
{
    public class WeatherService : IWeatherService
    {
        private readonly WeatherRepository _weatherRepository;
        public WeatherService()
        {
            _weatherRepository = new WeatherRepository();
        }
        public List<Weather> FindOpenWeatherByCityName(string cityName)
        {
            List<OpenWeather> openWeatherList = _weatherRepository.FindOpenWeatherByCityName(cityName);
            var weatherList = new List<Weather>();
            foreach (OpenWeather a in openWeatherList)
            {
                var weather = new Weather();
                weather.ID = a.WeatherModel.Id;
                weather.Type = a.WeatherModel.Main.ToString();
                weather.Temp = a.MainClass.Temp;
                weather.TempMax = a.MainClass.TempMax;
                weather.TempMin = a.MainClass.TempMin;
                weather.Wind = a.Wind.Speed;
                weather.Description = a.WeatherModel.Description.ToString();
                weather.Icon = a.WeatherModel.Icon;
                weather.DtText = a.List[0].DtTxt.ToString();

                weatherList.Add(weather);
            }
            return weatherList;
        }
    }
}
