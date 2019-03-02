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
                var weather = new Weather
                {
                    ID = a.Weather[0].Id,
                    Type = a.Weather[0].Main.ToString(),
                    Temp = a.Main.Temp,
                    TempMax = a.Main.TempMax,
                    TempMin = a.Main.TempMin,
                    Wind = a.Wind.Speed,
                    Description = a.Weather[0].Description.ToString(),
                    Icon = a.Weather[0].Icon,
                    DtText = a.DtTxt.ToString()
                };

                weatherList.Add(weather);
            }
            return weatherList;
        }
    }
}
