var testDirective = angular.module('app.test-directive', []);

testDirective.directive('testDirective', function() {

    function testDirectiveController($scope) {
        var vm = this;
        vm.people = ['me', 'myself', 'I'];
    }

    return {
        restrict   : 'EA',
        transclude : false,
        templateUrl : '/src/client/app/components/test-directive/test-directive.html',
        scope : {},
        controllerAs : 'vm',
        controller : testDirectiveController,
        bindToController : true,
        link : function(scope) {
        }
    };
});


