'use strict';

describe('Controller: AddStoryCtrl', function () {

  // load the controller's module
  beforeEach(module('storyboardModule'));

  var AddStoryCtrl,
    scope,
    StoryService;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _StoryService_) {
    scope = $rootScope.$new();
    StoryService = _StoryService_;
    AddStoryCtrl = $controller('AddStoryCtrl', {
      $scope: scope,
      $modalInstance: { close: function() {} },
      selectedBoardName: '',
      StoryService: StoryService
    });
  }));

    it('should call the storyboard service when adding a story', function() {
        spyOn(StoryService, 'addStory');
        scope.add('', {});
        expect(StoryService.addStory).toHaveBeenCalled();
    });

//    it('should call the method method when adding a story', function() {
//        spyOn($modalInstance, 'close');
//        scope.add('', {});
//        expect($modalInstance.close).toHaveBeenCalled();
//    });
});
