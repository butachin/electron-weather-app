using System.Collections.Generic;
using Proto.Weather;

namespace Backend.Service.Interface
{
    public interface IWeatherService
    {
        List<Weather> FindOpenWeatherByCityName(string cityName);
    }
}
