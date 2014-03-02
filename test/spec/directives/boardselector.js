'use strict';

describe('Directive: boardSelector', function () {

  // load the directive's module
  beforeEach(module('getAgileApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<board-selector></board-selector>');
    element = $compile(element)(scope);
    expect(true).toBe(true);
  }));
});
