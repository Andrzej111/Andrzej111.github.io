// script.js

    var andrzejapp = angular.module('andrzejapp', ['ngRoute']);

//    // create the controller and inject Angular's $scope
//    scotchApp.controller('mainController', function($scope) {
//
//        // create a message to display in our view
//        $scope.message = 'Everyone come and see how good I look!';
//    });

andrzejapp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            });
    });
andrzejapp.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Duppa';
    });
andrzejapp.controller('aboutController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Tutaj about';
    });
andrzejapp.controller('contactController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Tutaj kontakt';
    });
