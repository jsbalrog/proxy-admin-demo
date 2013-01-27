userAdmin.factory('UserService', function($rootScope) {
    var userService = {};

    userService.getApps = function(scope, http) {
        Provider.getApps(scope, http);
    };

    userService.getUsers = function(scope, http, app) {
        return Provider.getUsers(scope, http, app);
    };

    userService.setSelectedApp = function(app) {
        this.broadcastSelectedApp(app);
    };

    userService.broadcastSelectedApp = function(app) {
        $rootScope.$broadcast('appSelected', app);
    };

    return userService;
});