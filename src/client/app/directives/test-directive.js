angular.module('app.directive').directive('testDirective', function() {
    return {
        restrict    : 'EA',
        // transclude  : false,
        templateUrl : 'app/directives/test-directive.html',
        link : function(scope) {
            console.log(scope);
        }
    };
});

