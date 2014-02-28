'use strict';

describe('Directive: loginBox', function () {

  // load the directive's module
  beforeEach(module('storyboardModule'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<login-box></login-box>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the loginBox directive');
  }));
});
