using System.Collections.Generic;
using System.Net;
using Server.Models;
using Server.Repositories.Endpoints;
using Server.Repositories.Interfaces;

namespace Server.Repositories
{
    public class WeatherRepository:IWeatherRepository
    {
        public List<OpenWeather> FindOpenWeatherByCityName(string cityName)
        {
            string parametar = "?q" + cityName;
            string ROOT_URL = OpenWeatherMap.ROOT_URL;
            string APP_KEY = OpenWeatherMap.APP_KEY;
            string url = ROOT_URL + parametar + APP_KEY;
            var weatherList = new List<OpenWeather>();
            using(WebClient webClient = new WebClient())
            {
                string json = webClient.DownloadString(url);
                OpenWeather openWeather = OpenWeather.FromJson(json);
                weatherList.Add(openWeather);
            }
            return weatherList;
        }
    }
}
