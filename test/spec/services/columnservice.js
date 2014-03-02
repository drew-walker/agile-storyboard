'use strict';

describe('Service: ColumnService', function () {

  // load the service's module
  beforeEach(module('getAgileApp'));

  // instantiate service
  var ColumnService;
  beforeEach(inject(function (_ColumnService_) {
    ColumnService = _ColumnService_;
  }));

  it('should do something', function () {
    expect(!!ColumnService).toBe(true);
  });

});
