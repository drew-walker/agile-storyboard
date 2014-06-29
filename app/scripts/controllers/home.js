'use strict';

angular.module('getAgileApp').controller('HomeCtrl', function ($scope, BoardService) {
    $scope.boards = [];
    var boards = BoardService.getBoards();
    boards.$on('loaded', function() {
        $scope.boards = boards;
    });
});
