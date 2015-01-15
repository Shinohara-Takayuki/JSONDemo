'use strict';

/**
 * @ngdoc overview
 * @name jsondemoApp
 * @description
 * # jsondemoApp
 *
 * Main module of the application.
 */
var app = angular.module('jsondemoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);

 app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
      //  controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/about.html'
      });
  });
