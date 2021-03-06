'use strict';

eventsApp.directive('collapsible', function(){
    return {
        restrict: "E",
        replace: true,
        template: "<div><h4 class='well-title' ng-click='toggleVisibility()'>{{title}}</h4><div ng-transclude ng-show='visible'><div></div>",
        transclude: true,
        controller: function($scope){
            $scope.toggleVisibility = function(){
                $scope.visible = !$scope.visible;
            }
        },
        scope: {
            title: '@'
        }
    }
});