// src/js/app.js
var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/login.html',
            controller: 'LoginController'
        })
        .when('/crud', {
            templateUrl: 'views/crud.html',
            controller: 'CrudController'
        })
        .otherwise({
            redirectTo: '/'
        });
});
