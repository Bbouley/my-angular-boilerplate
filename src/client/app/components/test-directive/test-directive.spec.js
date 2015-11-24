describe('test-directive', function() {

    var element;
    var scope;

    beforeEach(function() {
        module('app');
    });

    beforeEach(function() {
        module('../src/app/test-directive/test-directive.html')
    })

    beforeEach(inject(function($rootScope) {
        scope = $rootScope.$new();
    }));

    it('displays the template html', function(done) {
        assert.equal(element.text().trim(), 'Here is your test-directive template');
        done();
    });

});

describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal(-1, [1,2,3].indexOf(5));
            assert.equal(-1, [1,2,3].indexOf(0));
        });
    });
});
