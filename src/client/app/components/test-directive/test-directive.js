angular.module('app.test-directive').directive('testDirective', function() {
    return {
        restrict   : 'EA',
        transclude : false,
        // template   : '<a>testing the tests</a>',
        templateUrl : 'app/components/test-directive/test-directive.html',
        link : function(scope) {

        }
    };
});

