(function() {
    'use strict';

    var app = angular.module('app.components.example-directive', []);

    app.directive('exampleDirective', function() {
        return {
            restrict : 'E',
            replace : true,
            templateUrl : '/src/client/app/components/example-template.html',
            scope : {
                color : '@'
            }
        }
    })
})();
