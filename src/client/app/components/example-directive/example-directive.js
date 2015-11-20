var app = angular.module('app.components.example-directive', []);

    app.directive('exampleDirective', function() {
        return {
            restrict    : 'E',
            templateUrl : 'app/components/example-directive/example-template.html',
            scope : {
                color : '@'
            }
        }
    })
