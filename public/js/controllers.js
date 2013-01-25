AppListCtrl = function($scope, UserService) {
    $scope.data = {};
    $scope.data.apps = UserService.getApps();

    $scope.change = function(selectedApp) {
        UserService.setSelectedApp(selectedApp);
    };
};

UserListCtrl = function($scope, UserService) {
    $scope.$on('appSelected', function(evt, selectedApp) {
        $scope.data = {};
        $scope.data.users = UserService.getUsers(selectedApp);
    });
};