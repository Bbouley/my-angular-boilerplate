var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../src/server/app');

// *** add in requirements for mongoose and schemas *** //

var should = chai.should();

describe('example', function() {
    it('should return 1', function() {
        var test = 1;
        test.should.equal(1);
    })
})
