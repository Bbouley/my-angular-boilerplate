angular.module('app.testDirective', []).directive('testDirective', function() {
    return {
        restrict    : 'EA',
        transclude  : true,
        // templateUrl : 'app/directives/test-directive.html',
        template : '<h1>Template instead of url</div>'
    }
})

