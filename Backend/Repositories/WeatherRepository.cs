using System.Collections.Generic;
using System.Net;
using Backend.Models;
using Backend.Repositories.Endpoints;
using Backend.Repositories.Interfaces;
using System;

namespace Backend.Repositories
{
    public class WeatherRepository:IWeatherRepository
    {
        public List<OpenWeather> FindOpenWeatherByCityName(string cityName)
        {
            string parametar = "?q=" + cityName;
            string ROOT_URL = OpenWeatherMap.ROOT_URL;
            string APP_KEY = OpenWeatherMap.APP_KEY;
            string url = ROOT_URL + parametar + APP_KEY;
            var openWeatherList = new List<OpenWeather>();
            try {
                using(WebClient webClient = new WebClient())
                {
                    string json = webClient.DownloadString(url);
                    OpenWeather openWeather = OpenWeather.FromJson(json);
                    openWeatherList.Add(openWeather);
                }
            } 
            catch (WebException e)
            {
                Console.WriteLine(e);
            } 
            return openWeatherList;
        }
    }
}
