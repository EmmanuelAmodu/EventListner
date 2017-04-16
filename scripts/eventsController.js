var fs = require('fs');
var path = require('path');
var rootPath = path.normalize(__dirname + '/../');

module.exports.read = function(req, res){
	if (req.params.id){
		var event = fs.readFileSync('app/data/event/' + req.params.id + '.json', 'utf8');
		res.setHeader('Content-Type', 'application/json');
		res.send(event);
	} else {
		var id = fs.readFileSync('app/data/event/id.txt', 'utf8');
		res.setHeader('Content-Type', 'text/plain');
		id = parseNumber(id*1)+1;
		res.send(id);
	}
}

module.exports.create = function(req, res){
	var event = req.body;
	fs.writeFileSync('app/data/event/' + req.params.id + '.json', JSON.stringify(event));
	var id = ((event.id)*1);
	fs.writeFileSync('app/data/event/id.txt', id);
	res.send(event);
}

module.exports.getAllEvents = function(req, res){
	var path = 'app/data/event/';
	var files = [];
	try{
		files = fs.readdirSync(path);
	} catch (err){
		res.send('[]');
		res.end();
		console.log(err);
		return;
	}
	var results = "[";
	for(var idx=0; idx<files.length; idx++){
		if (files[idx].indexOf(".json") == files[idx].length - 5){
			results +=fs.readFileSync(path+"/"+files[idx]) +",";
		}
	}
	results = results.substr(0, results.length - 1);
	results += "]";

	res.setHeader('Content-Type', 'application/json');
	res.send(results);
	res.end();
}