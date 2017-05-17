var express = require('express'); 
var app = express();
var bodyParser = require('body-parser'); 
var fs = require('fs');
var morgan = require('morgan');
var handlebars = require('express-handlebars');

app.set('port', process.env.PORT || 3000);  //sets port 3000

morgan.token('res', function getId(res) {
	return res;
});

var accessLogStream = fs.createWriteStream(__dirname + '/logs/access.log', {flags: 'a'});
// setup the logger
app.use(morgan(':req[body] :res[body]', {stream: accessLogStream}));

app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars'); //sets express view engine to handlebars

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(express.static(__dirname + '/public')); 

app.use(bodyParser.json());  

app.use(require('./controllers'));

app.use(function(req,res){  //express catch middleware if page doesn't exist
	res.status(404);  //respond with status code
	res.render('404'); //respond with 404 page
});

app.listen(app.get('port'), function(){ //start express server
	console.log( 'Express Server Started on http://localhost:3000');

});