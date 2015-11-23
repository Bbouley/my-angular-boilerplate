var chai = require('chai');
var assert = chai.assert;

describe('test-directive', function() {

    var injector;
    var element;
    var scope;

    beforeEach(function() {
        module('app');
    });

    beforeEach(function() {
        injector = angular.injector(['app.test-directive'])
        injector.invoke(function($rootScope, $compile) {
            scope = $rootScope.$new();

            element = $compile('<test-directive></test-directive>')(scope);
            scope.$apply();
        });
    });

    it('displays the template html', function(done) {
        assert.equal(element.text().trim(), 'Here is your test-directive template');
        done();
    });

})

describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal(-1, [1,2,3].indexOf(5));
            assert.equal(-1, [1,2,3].indexOf(0));
        })
    })
})
