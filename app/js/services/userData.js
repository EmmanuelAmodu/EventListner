eventsApp.factory("userData", function($resource, $http){
    var resource = $resource('/data/user/:id', {id:'@id'}, {update: {method:'PUT'}});
    return {
        getEvent: function(){
            return resource.get({user:1});
        },
        saveUser: function(user){
            return resource.save(user);
        }
    };
});