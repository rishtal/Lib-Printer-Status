
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();
var server = http.createServer(app)
var io = require('socket.io').listen(server);
var connections = [];

var mongojs = require('mongojs');
var db = mongojs('aegis:pn93WLnJI1@192.168.101.44/status', ['machines']);

// all environments
app.set('port', process.env.PORT || 8000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').__express);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('less-middleware')({ src: __dirname + '/public' }));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);

server.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});

io.sockets.on('connection', function (socket) {

  connections.push(socket);
  
  socket.on('disconnect', function() {
    connections.splice(connections.indexOf(socket),1);
  });
  
  console.log(connections.length);
  
  if (connections.length > 0) {
    connections.forEach(function(client) {
      db.machines.find().sort({"_id": -1}).limit(1, function(err, doc) {
        client.emit("status", doc[0]);
      });
    });
    setInterval(function() {
      connections.forEach(function(client) {
      db.machines.find().sort({"_id": -1}).limit(1, function(err, doc) {
        client.emit("status", doc[0]);
      });
    }); }, 30000);
  }
});