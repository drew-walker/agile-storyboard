'use strict';

describe('Service: IndexService', function () {

  // load the service's module
  beforeEach(module('getAgileApp'));

  // instantiate service
  var IndexService;
  beforeEach(inject(function (_IndexService_) {
    IndexService = _IndexService_;
  }));

  it('should do something', function () {
    expect(!!IndexService).toBe(true);
  });

});
