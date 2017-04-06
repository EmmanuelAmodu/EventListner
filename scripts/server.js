var express = require('express');
var path = require('path');
var event = require('./eventsController');
var rootPath = path.normalize(__dirname + '/../');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extented: true}));
app.use(bodyParser.json({extended: true}));
app.use(express.static(rootPath + '/app'));

app.get('/data/event/:id',event.get);
app.post('/data/event/:id', event.save);

app.listen(8000);
console.log("server started");