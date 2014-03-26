'use strict';

angular.module('iotMobileApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ionic'
]).config(function ($routeProvider, $stateProvider, $urlRouterProvider) {
    /*$routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });*/
    $stateProvider
        .state('main', {
            url: "/",
            templateUrl: "views/main.html",
            controller: 'MainCtrl'
        })
        .state('nova-notificacao', {
            url: "/nova-notificacao/:tipo",
            templateUrl: function (stateParams) {
                return "views/nova-notificacao-" + stateParams.tipo + ".html"
            },
            controller: 'NovaNotificacaoCtrl'
        });

    $urlRouterProvider.otherwise("/");
});