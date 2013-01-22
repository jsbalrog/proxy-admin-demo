AppListCtrl = function($scope) {
    $scope.data = {};
    $scope.data.apps = Provider.getApps();
};