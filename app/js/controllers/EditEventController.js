'use strict';

eventsApp.controller('editEventController', function($scope){
    $scope.saveEvent = function(event, editEventForm){
        console.log(editEventForm);
        if(editEventForm.$valid){
            window.alert('event ' + event.name + ' saved');
        }
    };

    $scope.cancelEdit = function() {
        window.location = "/EventDetails.html";
    };
});