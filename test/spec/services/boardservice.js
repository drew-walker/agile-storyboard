'use strict';

describe('Service: BoardService', function () {

  // load the service's module
  beforeEach(module('getAgileApp'));

  // instantiate service
  var BoardService, IndexService;
  beforeEach(inject(function (_BoardService_, _IndexService_) {
    BoardService = _BoardService_;
    IndexService = _IndexService_;
  }));

  it('should call IndexService.removeUserFromIndexForBoardTeam when removeUserFromBoard is called', function () {
    spyOn(IndexService, 'removeUserFromIndexForBoardTeam');
    BoardService.removeUserFromBoard('abc123', 'user123');
    expect(IndexService.removeUserFromIndexForBoardTeam).toHaveBeenCalled();;
  });

    it('should call IndexService.removeBoardFromIndexForUser when removeUserFromBoard is called', function () {
        spyOn(IndexService, 'removeBoardFromIndexForUser');
        BoardService.removeUserFromBoard('abc123', 'user123');
        expect(IndexService.removeBoardFromIndexForUser).toHaveBeenCalled();;
    });

});
