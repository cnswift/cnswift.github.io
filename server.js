var connect = require('connect');
var log4js = require('log4js');
var logger = log4js.getLogger();

var port = 4001;

connect.createServer(
    connect.static('./')
).listen(port);
logger.info('Server started at http://localhost:' + port );
