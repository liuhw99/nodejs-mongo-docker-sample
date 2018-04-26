var express = require('express');
var app = express();
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var instantMongoCrud = require('express-mongo-crud'); // require the module
var config = require('config');

var HTTP_HOST = config.get("httpserver.host");
var HTTP_PORT = config.get("httpserver.port");
var DB_HOST = config.get("mongodb.host");
var DB_PORT = config.get("mongodb.port") || 27017;
var USER_NAME = config.get("user.name");

// REQUIRE MIDDLEWARE
mongoose.connect(DB_HOST + ':' + DB_PORT + '/mongocrud');
app.use(bodyParser.json()); // add body parser

var options = { //specify express-mongo-crud options
	host: HTTP_HOST + ":" + HTTP_PORT
}
app.use(instantMongoCrud(options)); // use as middleware

router.get('/', function(req, res){
	//console.log(USER_NAME);
    res.send('Hello ' + USER_NAME);
});
app.use(router);

app.listen(HTTP_PORT, ()=>{
	console.log('started');
});