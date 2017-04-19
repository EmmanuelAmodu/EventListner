'use strict';

eventsApp.directive('upvote', function(){
    return {
        restrict: 'E',
        templateUrl: "/templates/directives/upVote.html",
        scope: {
            upvote: "&",
            downvote: "&",
            count: "="
        }
    }
});