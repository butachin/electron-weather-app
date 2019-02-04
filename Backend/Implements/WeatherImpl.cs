using System;
using System.Threading.Tasks;
using Grpc.Core;
using Proto.Weather;
using Backend.Service.Interface;

namespace Backend.Implements
{
    public class WeatherImpl: Weathers.WeathersBase
    {
        IWeatherService service;
        public WeatherImpl(IWeatherService _service): base()
        {
            this.service = _service ?? throw new ArgumentNullException(nameof(IWeatherService));
        }
        public override Task<GetResponse> Get(GetRequest request, ServerCallContext context)
        {
            string cityName = request.CityName;
            var weathers = this.service.FindOpenWeatherByCityName(cityName);
            var response = new GetResponse();
            response.Weather = weathers[0];
            return Task.FromResult(response);
        }
    }
}