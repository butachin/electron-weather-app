using Moq;
using Backend.Service.Interface;
using Google.Protobuf.Collections;
using Proto.Weather;
using System;
using Xunit;
using Backend.Implements;
using Grpc.Core.Testing;
using Grpc.Core;
using System.Threading;
using Grpc.Core.Utils;

namespace Backend.Test.Implements
{
    public class WeatherImplTest
    {
        private Mock<IWeatherService> weatherMoq;

        private readonly Weather weather;

        private RepeatedField<Weather> weatherList;

        public WeatherImplTest()
        {
            weatherMoq = new Mock<IWeatherService>();

            weatherList = new RepeatedField<Weather>();

            weather = new Weather
            {
                ID = 800,
                Type = "Clear",
                Temp = 277.96,
                TempMax = 277.96,
                TempMin = 275.968,
                Wind = 6.66,
                Description = "clear sky",
                Icon = "01d",
                DtText = "03 / 02 / 2019 06:00:00 + 00:00"
            };

            weatherList.Add(weather);

            weatherMoq.Setup(x => x.FindOpenWeatherByCityName(It.IsAny<string>())).Returns(weatherList);
        }

        [Fact]
        public void GetTest()
        {
            var implement = new WeatherImpl(weatherMoq.Object);

            var fakeServerCallContext = TestServerCallContext.Create(
                "fooMethod",
                null,
                DateTime.UtcNow.AddHours(1),
                new Metadata(),
                CancellationToken.None,
                "127.0.0.1",
                null,
                null,
                (metadate) => TaskUtils.CompletedTask,
                () => new WriteOptions(),
                (writeOptions) => { }
            );

            var result = implement.Get(new GetRequest(), fakeServerCallContext);

            Assert.Equal(result.Result.WeatherList, weatherList);
        }
    }
}
