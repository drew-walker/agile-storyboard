'use strict';

angular.module('getAgileApp').controller('ReleaseCtrl', function ($scope, syncData, BoardService, $routeParams) {
    $scope.selectedBoardId = null;

    $scope.loadReleases = function(boardId) {
        $scope.selectedBoardId = boardId;

        var releases = syncData('releases/' + $scope.selectedBoardId);
        releases.$on('loaded', function () {
            $scope.releases = releases;
        });
    }

    BoardService.getBoardIdFromSlug($routeParams.boardSlug).then($scope.loadReleases);
});