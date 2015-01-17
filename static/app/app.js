var app = angular.module('scripts', ['ngRoute']);

// configure our routes
app.config(function($routeProvider) {
    $routeProvider
        // route for the home page
        .when('/', {
            templateUrl : '/assets/app/partial/home.html',
            controller  : 'mainCtrl'
        });
});