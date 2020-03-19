/*************************************************************************************
 *
 * Goal to delete a file on the WebServer
 *
 *************************************************************************************/
'use strict';

define(['app'], function (app) {

    var injectParams = ['$scope', '$location', '$filter', '$routeParams', '$window',
        '$timeout', 'fileService'];


    var Controller = function ($scope, $location, $filter, $routeParams, $window,
        $timeout, fileUtilityService) {


        var vm = this,

        function init() {

            vm.DeleteFiles("C:\inetpub\wwwroot\logs\test.txt", true);

            vm.DeleteFiles("C:\inetpub\wwwroot\logs\test2.txt", false);

        }


        //show implement of vm.DeleteFiles with showing alert for error if there is one occurred.











        init();

        Controller.$inject = injectParams;

        app.register.controller('Controller', Controller);
    };

});





//============================================================================================================================================//
C# Backend
namespace Test.Web {
    public static class WebApiConfig {
        public static void Register(HttpConfiguration config) {
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
            foreach(var match in matches)
            config.Formatters.Remove(match);
        }
    }
}
//============================================================================================================================================//
C# Controller

namespace Test.Web.Controllers {

    public class FileUtilityController : ApiController
    {

        [HttpPost]
        public HttpResponseMessage DeleteFiles(string file_path)
        {

            //Show in C# to delete a file and return the request response








        }
    }
}



