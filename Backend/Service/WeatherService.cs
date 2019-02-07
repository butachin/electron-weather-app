using System;
using System.Collections.Generic;
using Proto.Weather;
using Backend.Models;
using Backend.Repositories;
using Backend.Service.Interface;
using Google.Protobuf.Collections;

namespace Backend.Service
{
    public class WeatherService : IWeatherService
    {
        private readonly WeatherRepository _weatherRepository;
        public WeatherService()
        {
            _weatherRepository = new WeatherRepository();
        }
        public RepeatedField<Weather> FindOpenWeatherByCityName(string cityName)
        {
            List<OpenWeather> openWeatherList = _weatherRepository.FindOpenWeatherByCityName(cityName);
            var weatherList = new RepeatedField<Weather>();
            
            foreach (Backend.Models.List a in openWeatherList[0].List)
            {
                var weather = new Weather();
                weather.ID = a.Weather[0].Id;
                weather.Type = a.Weather[0].Main.ToString();
                weather.Temp = a.Main.Temp;
                weather.TempMax = a.Main.TempMax;
                weather.TempMin = a.Main.TempMin;
                weather.Wind = a.Wind.Speed;
                weather.Description = a.Weather[0].Description.ToString();
                weather.Icon = a.Weather[0].Icon;
                weather.DtText = a.DtTxt.ToString();
                weatherList.Add(weather);
            }
            return weatherList;
        }
    }
}
