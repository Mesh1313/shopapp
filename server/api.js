var express = require('express');
var bodyParser = require('body-parser');

//initialize the app
var app = module.exports = express();
var env = process.env.NODE_ENV;
app.set('env', env);

app.use(require('prerender-node'));

app.use(express.static(__dirname + '/../client'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.get('/', function(req, res) {
    res.send("Hello!!!");
});

process.on('uncaughtException', function(err, req, res) {
    console.log(err.stack);
});

process.on('SIGINT', function() {
    // calling shutdown allows your process to exit normally
    process.exit();
});