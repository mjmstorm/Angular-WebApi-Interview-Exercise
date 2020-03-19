/**********************************************************************
 * Services-- fileService.js
 **********************************************************************/
'use strict';

define(['app'], function (app) {

    var injectParams = ['$http', '$q'];

    var FileFactory = function ($http, $q) {

        var serviceBase = BaseURL + '/api/FileUtility/',
            factory = {};

        //show HTTP request method to the backend server to delete file.





        return factory;
    };

    FileFactory.$inject = injectParams;

    app.factory('fileService', FileFactory);

});