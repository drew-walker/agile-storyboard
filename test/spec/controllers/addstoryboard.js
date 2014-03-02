'use strict';

describe('Controller: AddStoryboardCtrl', function () {

  // load the controller's module
  beforeEach(module('getAgileApp'));

  var AddStoryboardCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddStoryboardCtrl = $controller('AddStoryboardCtrl', {
      $scope: scope,
      $modalInstance: {},
      selectedBoardName: ''
    });
  }));

});
