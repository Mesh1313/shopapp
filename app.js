'use strict';
require('babel-register');
require('babel-polyfill');

var http   = require('http');
var logger = require('./server/utils/logger');
var api    = require('./server/api');
var config = require('./config');

var httpServer = http.createServer(api);

httpServer.listen(config.server.port, function() {
    logger.log('info', `web server is available at http://${config.server.host}:${config.server.port}`);
});
