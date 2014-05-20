'use strict';

describe('Controller: LoginformCtrl', function () {

  // load the controller's module
  beforeEach(module('getAgileApp', function($provide) {
      $provide.value('$modalInstance', { dismiss: function() {} });
  }));

  var LoginFormCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LoginFormCtrl = $controller('LoginFormCtrl', {
      $scope: scope
    });
  }));

//  it('should attach a list of awesomeThings to the scope', function () {
//    expect(scope.awesomeThings.length).toBe(3);
//  });
});
