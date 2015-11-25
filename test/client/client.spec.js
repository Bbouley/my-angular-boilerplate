// describe('test-directive', function() {

//     var scope,
//         $compile,
//         element;

//     beforeEach(function() {
//         module('app.test-directive');
//     });

//     beforeEach(inject(function($injector) {
//         $compile = $injector.get('$compile');
//         var $rootScope = $injector.get('$rootScope');
//         scope = $rootScope.$new();
//     }));

//     afterEach(function() {
//         scope.$destroy();
//     })

//     it('displays the template html', function(done) {
//         element = angular.element('<test-directive></test-directive>');
//         $compile('<test-directive></test-directive>')(scope);
//         console.log(element);
//         assert.equal(element.html(), 'Here is your test-directive template')
//         done();
//     });

// });

describe('test-directive angular docs style', function() {
    var element,
        scope;

    // var testHtml = '<h1>testing</h1>'

    // $httpBackend.when('GET', '/app/components/test-directive/test-directive.html').respond(testHtml);


    beforeEach(module('app.test-directive'));

    // beforeEach(module('../../src/client/app/components/test-directive/test-directive.html', '../../src/client/app/partials/home.html' ))

    // beforeEach(module('dir-templates'))

    beforeEach(inject(function($compile, $rootScope, $templateCache) {
        $templateCache.put('../src/client/app/partials/home.html');
        element = angular.element('<test-directive></test-directive>');
        scope = $rootScope;
        // $templateCache.put('../../src/client/app/components/test-directive/test-directive.html', '.<template-goes-here />');
        $compile(element)(scope);
        scope.$digest();
    }));

    it('should display html', function() {
        console.log(element);
        var header = element.find('h1');
        console.log(element.html());
    })

})

describe('true', function() {
    it('should be true', function(done) {
        expect(1).to.equal(1);
        done()
    });
});
