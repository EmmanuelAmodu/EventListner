var express = require('express');
var path = require('path');
var event = require('./eventsController');
var user = require('./userController');
var rootPath = path.normalize(__dirname + '/../');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extented: true}));
app.use(bodyParser.json({extended: true}));
app.use(express.static(rootPath + '/app'));

app.get('/data/event/:id', event.read);
app.get('/data/event', event.getAllEvents);
app.post('/data/event/:id', event.create);

app.get('/data/user/', user.read);
app.post('/data/user/', user.create);
app.delete('/data/user/', user.delete);
app.put('/data/user/', user.update);

app.get('*', function(req, res){
    res.sendFile(rootPath + '/app/index.html');
});

var port = 8000;
app.listen(port);
console.log("server started at "+port);