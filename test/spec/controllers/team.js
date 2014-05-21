'use strict';

describe('Controller: TeamCtrl', function () {

  // load the controller's module
  beforeEach(module('getAgileApp'));

  var TeamCtrl,
    BoardService,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _BoardService_) {
    scope = $rootScope.$new();
    BoardService = _BoardService_;
    TeamCtrl = $controller('TeamCtrl', {
      $scope: scope
    });
  }));

  it('should call BoardService.addUserToBoard when addPersonToTeam is called', function () {
    spyOn(BoardService, 'addUserToBoard');
    scope.addPersonToTeam('board123');
    expect(BoardService.addUserToBoard).toHaveBeenCalled();
  });

    it('should call BoardService.removeUserFromBoard when removePersonFromTeam is called', function () {
        spyOn(BoardService, 'removeUserFromBoard');
        scope.removePersonFromTeam('board123');
        expect(BoardService.removeUserFromBoard).toHaveBeenCalled();
    });
});
