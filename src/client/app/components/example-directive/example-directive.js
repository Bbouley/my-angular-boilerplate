var myApp = angular.module('app', ['ngRoute']);

app.directive('exampleDirective', function() {
    return {
        templateUrl : 'app/components/template.html',
        scope : {
            color : '@'
        }
    }
})
