userAdmin.factory('UserService', function($rootScope) {
    var userService = {};

    userService.getApps = function() {
        return Provider.getApps();
    };

    userService.getUsers = function(app) {
        return Provider.getUsers(app);
    };

    userService.setSelectedApp = function(app) {
        this.broadcastSelectedApp(app);
    };

    userService.broadcastSelectedApp = function(app) {
        $rootScope.$broadcast('appSelected', app);
    };

    return userService;
});