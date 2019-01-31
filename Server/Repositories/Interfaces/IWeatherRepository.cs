using System.Collections.Generic;
using Server.Models;

namespace Server.Repositories.Interfaces
{
    public interface IWeatherRepository
    {
        List<OpenWeather> FindOpenWeatherByCityName(string cityName);
    }
}
