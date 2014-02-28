'use strict';

describe('Controller: AddColumnCtrl', function () {

  // load the controller's module
  beforeEach(module('storyboardModule'));

  var AddColumnCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddColumnCtrl = $controller('AddColumnCtrl', {
      $scope: scope,
      $modalInstance: {},
      selectedBoardName: ''
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    //expect(scope.awesomeThings.length).toBe(3);
  });
});
