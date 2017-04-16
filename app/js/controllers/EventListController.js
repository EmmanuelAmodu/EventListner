'use strict'
eventsApp.controller('eventListController', function($scope, $location, eventData){
    $scope.events = eventData.getAllEvents();
});