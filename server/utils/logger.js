var winston = require('winston');

var logger = new (winston.Logger)({
    transports       : [
        new (winston.transports.Console)({json: false, timestamp: true, colorize: true, prettyPrint: true}),
        new (winston.transports.File)({
            filename: __dirname + '/../../logs/runtime.log',
            json    : false,
            colorize: true,
            name    : 'all',
            maxsize : 1048576
        })
    ],
    exceptionHandlers: [
        new (winston.transports.Console)({json: false, timestamp: true, colorize: true, prettyPrint: true}),
        new (winston.transports.File)({
            filename : __dirname + '/../../logs/exceptions.log',
            json     : false,
            timestamp: true,
            maxsize  : 1048576
        })
    ],
    exitOnError      : false
});

module.exports = logger;