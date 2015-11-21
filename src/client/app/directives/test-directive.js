angular.module('app', ['ngRoute']).directive('testDirective', function() {
    return {
        restrict    : 'EA',
        // transclude  : false,
        templateUrl : 'app/directives/test-directive.html',
    }
})

