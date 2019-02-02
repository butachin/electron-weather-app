using System.Collections.Generic;
using Proto.Weather;

namespace Server.Service.Interface
{
    public interface IWeatherService
    {
        List<Weather> FindOpenWeatherByCityName(string cityName);
    }
}
