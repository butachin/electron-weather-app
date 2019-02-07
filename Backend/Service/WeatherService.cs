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
                weather.ID = a.List[0].Weather[0].Id;
                weather.Type = a.List[0].Weather[0].Main.ToString();
                weather.Temp = a.List[0].Main.Temp;
                weather.TempMax = a.List[0].Main.TempMax;
                weather.TempMin = a.List[0].Main.TempMin;
                weather.Wind = a.List[0].Wind.Speed;
                weather.Description = a.List[0].Weather[0].Description.ToString();
                weather.Icon = a.List[0].Weather[0].Icon;
                weather.DtText = a.List[0].DtTxt.ToString();

                weatherList.Add(weather);
            }
            return weatherList;
        }
    }
}
