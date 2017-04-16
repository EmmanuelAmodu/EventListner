eventsApp.factory("eventData", function($resource, $http){
    var resource = $resource('/data/event/:id', {id:'@id'});
    var id = function (){
        $http.get('/data/event/id.txt').then(function(res){
            return res.data;
        })
    }();
    
    return {
        getEvent: function(id){
            return resource.get({id:id});
        },
        saveEvent: function(data){
            id++;
            event.id = id;
            return resource.save(data);
        },
        getAllEvents: function(){
            return resource.query();
        }
    };
});