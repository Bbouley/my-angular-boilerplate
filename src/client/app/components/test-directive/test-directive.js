angular.module('app.test-directive').directive('testDirective', function() {
    return {
        restrict    : 'EA',
        // transclude  : false,
        templateUrl : 'app/components/test-directive/test-directive.html',
        link : function(scope) {

        }
    };
});

