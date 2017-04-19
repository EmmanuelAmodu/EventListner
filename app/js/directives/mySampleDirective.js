'use strict';

eventsApp.directive('mysample', function($compile){
    return {
        restrict: 'E',
        template: "<input type='text' ng-model='sampleData' /> {{sampleData}} <br />",
        scope: {}
    }
});