using System.Collections.Generic;
using Proto.Weather;
using Google.Protobuf.Collections;
namespace Backend.Service.Interface
{
    public interface IWeatherService
    {
        RepeatedField<Weather> FindOpenWeatherByCityName(string cityName);
    }
}
