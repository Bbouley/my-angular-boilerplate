var myApp = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'app/partials/home.html'
    })
    .otherwise({redirectTo: '/'});
}]);
