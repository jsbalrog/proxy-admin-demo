AppListCtrl = function($scope, $http, UserService) {
    $scope.data = {};
    UserService.getApps($scope, $http);

    $scope.change = function(selectedApp) {
        UserService.setSelectedApp(selectedApp);
    };
};

UserListCtrl = function($scope, $http, UserService) {
    $scope.$on('appSelected', function(evt, selectedApp) {
        $scope.data = {};
        UserService.getUsers($scope, $http, selectedApp);
    });
};