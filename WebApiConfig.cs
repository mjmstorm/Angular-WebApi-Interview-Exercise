using System;

namespace Test.Web
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{action}/{id}",
                defaults: new
                {
                    id = RouteParameter.Optional,
                    action = RouteParameter.Optional
                }
            );

            config.Formatters.JsonFormatter.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;

            // Remove default XML handler
            var matches = config.Formatters
                .Where(f => f.SupportedMediaTypes
                    .Where(m => m.MediaType.ToString() == "application/xml" ||
                                m.MediaType.ToString() == "text/xml")
                    .Count() > 0)
                .ToList();
            foreach (var match in matches)
                config.Formatters.Remove(match);
        }
    }
}