'use strict';

describe('Service: StoryService', function () {

  // load the service's module
  beforeEach(module('storyboardModule'));

  // instantiate service
  var StoryService;
  beforeEach(inject(function (_StoryService_) {
    StoryService = _StoryService_;
  }));

  it('should do something', function () {
    expect(!!StoryService).toBe(true);
  });

});
