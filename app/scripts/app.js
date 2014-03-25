'use strict';

angular.module('iotMobileApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ionic'
]).config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});