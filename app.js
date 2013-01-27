/**
 * Module dependencies.
 */

var express = require('express'),
    api = require('./routes/api'),
    page = require('./lib/middleware/paging');

var app = module.exports = express.createServer();

// Configuration
app.configure(function(){
    app.use(express.bodyParser()); // To parse POSTs into JSON
    app.use(express.static(__dirname + '/public'));
    app.use(app.router); // To handle routing
    app.use(page);
});

app.configure('development', function(){
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
    app.use(express.errorHandler());
});

// JSON API
app.get('/api/apps', api.apps);
app.get('/api/apps/:appId/users', api.users);

// Start server
var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});