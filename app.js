var express = require('express');
var app = express();
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var instantMongoCrud = require('express-mongo-crud'); // require the module

var HTTP_PORT = 3000;
var HTTP_HOST = "localhost";//"192.168.99.100";
var DB_HOST = "192.168.99.100";

// REQUIRE MIDDLEWARE
mongoose.connect(DB_HOST + ':27017/mongocrud');
app.use(bodyParser.json()); // add body parser

var options = { //specify express-mongo-crud options
	host: HTTP_HOST + ":" + HTTP_PORT
}
app.use(instantMongoCrud(options)); // use as middleware

router.get('/', function(req, res){
    res.send('works well112244');
});
app.use(router);

app.listen(HTTP_PORT, ()=>{
	console.log('started');
});