'use strict';

describe('Directive: DragAndDropFileUpload', function () {

  // load the directive's module
  beforeEach(module('agileStoryboardApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<-drag-and-drop-file-upload></-drag-and-drop-file-upload>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the DragAndDropFileUpload directive');
  }));
});
