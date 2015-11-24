describe('Test the test-directive', function () {

  var compile, scope, directiveElem;

  beforeEach(function () {
      module('app.test-directive');
  });


  beforeEach(inject(function ($compile, $rootScope) {
      $scope = $rootScope.$new();
      element = $compile('<test-directive></test-directive>')(scope);
  }));


  it('creates the directive', function () {
    scope.$digest();
    console.log('test');
  });

});

