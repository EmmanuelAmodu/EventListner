'use strict'
eventsApp.controller('eventListController', function($scope, eventData){
    $scope.events = eventData.getAllEvents();
});