'use strict';

describe('Controller: BoardCtrl', function () {

  // load the controller's module
  beforeEach(module('storyboardModule'));

  var StoryboardCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StoryboardCtrl = $controller('BoardCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
