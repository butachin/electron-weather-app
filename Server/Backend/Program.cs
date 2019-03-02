using System;
using Grpc.Core;
using Microsoft.Extensions.Configuration;
using Proto.Weather;
using Backend.Implements;
using Backend.Service;

namespace Backend
{
    public class Program
    {
        public static IConfigurationRoot configuration;
        public static void Main(string[] args)
        {
            const int Port = 5000;
            var weatherImple = new WeatherImpl(new WeatherService());
            Server server = new Server
            {
                Services =
                {
                    Weathers.BindService(weatherImple)
                },
                Ports = { new ServerPort("0.0.0.0", Port, ServerCredentials.Insecure) }
            };
            server.Start();

            Console.WriteLine("starting server ...");
            Console.Read();

            server.ShutdownAsync().Wait();
        }
    }
}
