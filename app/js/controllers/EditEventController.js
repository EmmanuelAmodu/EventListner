'use strict';

eventsApp.controller('editEventController', function($scope, $log, eventData){
    $scope.saveEvent = function(event){
        eventData.saveEvent(event)
            .$promise.then(function(res){
                $log.info(res.data);
            }, function(err){
                $log.warn(err.data);
            });
    };

    $scope.cancelEdit = function() {
        window.location = "/EventDetails.html";
    };
});