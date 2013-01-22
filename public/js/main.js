angular.module('userAdmin', []).
    config(function($routeProvider) {
        $routeProvider.when('/', {templateUrl: 'partials/manage.html'});
        $routeProvider.when('/manage', {templateUrl: 'partials/manage.html'});
        $routeProvider.when('/security', {templateUrl: 'partials/security.html'});
    });