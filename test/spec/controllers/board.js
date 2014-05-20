'use strict';

describe('Controller: BoardCtrl', function () {

  // load the controller's module
  beforeEach(module('getAgileApp'));

  var StoryboardCtrl,
      modal,
      window,
      scope,
      BoardService,
      ColumnService,
      StoryService;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $modal, _BoardService_, _ColumnService_, _StoryService_, $window) {
    modal = $modal;
    window = $window;
    scope = $rootScope.$new();
    BoardService = _BoardService_;
    ColumnService = _ColumnService_;
    StoryService = _StoryService_;
    StoryboardCtrl = $controller('BoardCtrl', {
      $scope: scope,
      BoardService: BoardService,
      ColumnService: ColumnService,
      StoryService: StoryService
    });
  }));

//    it('should set number of columns to 0 when initialising', function() {
//        scope.init();
//        expect(scope.numberOfColumns).toBe(0);
//    });

    it('should call $window.confirm when deleteStory is called', function() {
        spyOn(window, 'confirm');
        scope.deleteStory();
        expect(window.confirm).toHaveBeenCalled();
    });

    it('should call $window.confirm when deleteColumn is called', function() {
        spyOn(window, 'confirm');
        scope.deleteColumn();
        expect(window.confirm).toHaveBeenCalled();
    });

    it('should set column width to 12 when there is 1 column', function() {
        scope.updateColumnWidth(1);
        expect(scope.columnWidth).toBe(12);
    });

    it('should set column width to 6 when there are 2 columns', function() {
        scope.updateColumnWidth(2);
        expect(scope.columnWidth).toBe(6);
    });

    it('should set column width to 4 when there are 3 columns', function() {
        scope.updateColumnWidth(3);
        expect(scope.columnWidth).toBe(4);
    });

    it('should set column width to 3 when there are 4 columns', function() {
        scope.updateColumnWidth(4);
        expect(scope.columnWidth).toBe(3);
    });

    it('should set column width to 2 when there are 5 columns', function() {
        scope.updateColumnWidth(5);
        expect(scope.columnWidth).toBe(2);
    });
    it('should set column width to 2 when there are 6 columns', function() {
        scope.updateColumnWidth(6);
        expect(scope.columnWidth).toBe(2);
    });
});
