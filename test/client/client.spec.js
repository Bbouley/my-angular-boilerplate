describe('test-directive', function() {

    // var scope,
    //     $compile;

    // beforeEach(function() {
    //     module('app.test-directive');
    // });

    // beforeEach(inject(function($injector) {
    //     $compile = $injector.get('$compile');
    //     var $rootScope = $injector.get('$rootScope');

    //     scope = $rootScope.$new();
    // }));

    // afterEach(function() {
    //     scope.$destroy();
    // })

    var injector,
        element,
        scope;

    beforeEach(function() {
      injector = angular.injector(['app.test-directive'])

      injector.invoke(function($rootScope, $compile) {
        scope = $rootScope.$new();
        element =  $compile('<test-directive></test-directive>')(scope);
        scope.$apply();
      })
    })


    it('displays the template html', function(done) {
        done();
    });


});
