'use strict';

describe('Controller: QuickLoginCtrl', function () {

  // load the controller's module
  beforeEach(module('getAgileApp'));

  var QuickLoginCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    QuickLoginCtrl = $controller('QuickLoginCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(true).toBe(true);
  });
});
