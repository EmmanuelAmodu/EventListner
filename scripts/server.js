var express = require('express');
var path = require('path');
var rootPath = path.normalize(__dirname + '/../');
var app = express();

app.use(express.static(rootPath + '/app'));
app.listen(8000);
console.log("server started");