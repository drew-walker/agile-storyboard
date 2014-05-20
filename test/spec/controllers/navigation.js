'use strict';

describe('Controller: NavigationCtrl', function () {

  // load the controller's module
  beforeEach(module('getAgileApp'));

  var NavigationCtrl,
    window,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $window) {
    window = $window;
    scope = $rootScope.$new();
    NavigationCtrl = $controller('NavigationCtrl', {
      $scope: scope
    });
  }));

  it('should call $window.confirm before deleting a storyboard', function () {
    spyOn(window, 'confirm');
    scope.deleteStoryboard();
    expect(window.confirm).toHaveBeenCalled();
  });
});
