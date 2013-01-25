AppListCtrl = function($scope) {
    $scope.data = {};
    $scope.data.apps = Provider.getApps();

    $scope.change = function(selectedApp) {
        console.log(selectedApp);
    };
};