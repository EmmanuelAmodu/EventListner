'use strict';
var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute'])
    .config(function($routeProvider, $locationProvider){
        $routeProvider
            .when('/newEvent', {
                templateUrl: 'templates/newEvent.html',
                controller: 'editEventController'
            })
            .when('/events', {
                templateUrl: 'templates/EventList.html',
                controller: 'eventListController'
            })
            .when('/event/:id', {
                templateUrl: 'templates/EventDetails.html',
                controller: 'EventController',
                resolve: {
                    event: function($route, eventData){
                        return eventData.getEvent($route.current.pathParams.id).$promise;
                    }
                }
            })
            .when('/sampleDirective', {
                templateUrl: 'templates/sampleDirective.html',
                controller: 'SampleDirectiveController'
            })
            .when('/editprofile', {
                templateUrl: 'templates/EditProfile.html',
                controller: 'EditProfileController'
            })
            .otherwise({redirectTo: '/events'});
   
        $locationProvider.html5Mode(true);
    });
