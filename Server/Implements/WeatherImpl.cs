using Proto.Weather;

namespace Repositories.Implements
{
    public class WeatherImpl: Weathers.WeathersBase
    {
        IWeatherService service;
        public WeatherImpl(IWeatherService _service): base()
        {

        }
    }
}