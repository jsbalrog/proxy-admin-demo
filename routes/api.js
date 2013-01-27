var Provider = require('../providers/provider-memory').Provider;

var provider = new Provider();

exports.apps = function(req, res) {
    provider.getApps(function(error, apps) {
        if(!error) {
            res.json({
                apps: apps
            });
        } else {
            console.log(error);
        }
    });
};

exports.users = function(req, res) {
    provider.getUsers(req.params.appId, function(error, users) {
        if(!error) {
            res.json({
                users: users
            });
        } else {
            console.log(error);
        }
    });
};