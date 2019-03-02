using System.Collections.Generic;
using Backend.Models;

namespace Backend.Repositories.Interfaces
{
    public interface IWeatherRepository
    {
        List<OpenWeather> FindOpenWeatherByCityName(string cityName);
    }
}
