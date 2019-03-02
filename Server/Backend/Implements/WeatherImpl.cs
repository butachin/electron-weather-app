using System;
using System.Threading.Tasks;
using Grpc.Core;
using Proto.Weather;
using Backend.Service.Interface;
using Grpc.Core.Logging;

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
            GrpcEnvironment.Logger.Debug(weathers.ToString());
            var response = new GetResponse();
            response.WeatherList.Add(weathers);
            return Task.FromResult(response);
        }
    }
}