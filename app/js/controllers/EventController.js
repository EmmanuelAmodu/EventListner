'use strict';

eventsApp.controller("EventController", function($scope){
    $scope.sortorder = "-name";
    $scope.event = {
        name: "Angular boot Camp",
        date:"1/1/2016",
        time:"11:00pm",
        location: {
            address: "Google HeadQuarter",
            city: "Mountain view",
            province: "CA"
        },
        imageUrl: "/img/angularjs-logo.png",
        sessions: [
            {
                name: 'Directive Masterclass introductory',
                creatorNmae: 'Bob Smith',
                duration: 1,
                level: 'Advance',
                abstract: 'In this session you will learn the ins and outs of directive',
                upVoteCount: 0
            },
            {
                name: 'Scope for fun and profit',
                creatorNmae: 'John Doe',
                duration: 2,
                level: 'introductory',
                abstract: 'This session will take a closer look at scope',
                upVoteCount: 0
            },
            {
                name: 'Well behaved controllers',
                creatorNmae: 'Jane Smith',
                duration: 4,
                level: 'intermediate',
                abstract: 'Controller are the beginning of everything angular',
                upVoteCount: 0
            }
        ]
    };

    $scope.upVoteSession = function(session){
        session.upVoteCount++;
    }

    $scope.downVoteSession = function(session){
        session.upVoteCount--;
    }
});