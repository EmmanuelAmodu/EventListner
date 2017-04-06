'use strict';

eventsApp.controller("EventController", ['$scope', 'eventData', function($scope, eventData){
    $scope.sortorder = "-name";
    eventData.getEvent()
        .$promise.then(function(event){
            $scope.event = event;
            console.log(event);
        });
    $scope.upVoteSession = function(session){
        session.upVoteCount++;
    }

    $scope.downVoteSession = function(session){
        session.upVoteCount--;
    }
}]);