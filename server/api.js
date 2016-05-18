var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./routes');

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

routes(app);

process.on('uncaughtException', function(err, req, res) {
    console.log(err.stack);
});

process.on('SIGINT', function() {
    // calling shutdown allows your process to exit normally
    process.exit();
});