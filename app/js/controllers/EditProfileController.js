'use strict';
eventsApp.controller('EditProfileController', function($scope, gravatarUrlBuilder, userData) {
   $scope.saveUser = function(data){
       console.log(data)
       data.UID = data.userName;
        userData.saveUser(data)
            .$promise.then(function(res){
                console.log(res.data);
            }, function(err){
                console.log(res.data);
            });
    };
});
