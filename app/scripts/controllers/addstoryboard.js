'use strict';

angular.module('getAgileApp')
    .controller('AddStoryboardCtrl', function($scope, $modalInstance, BoardService, $location, loginService) {
        $scope.auth = loginService.auth();

        $scope.add = function(newStoryboard, userId) {
            newStoryboard.admin = userId;
            BoardService.addBoard(newStoryboard).then(function(newBoard) {
                BoardService.addUserToBoard(newBoard.boardId, userId);
                $modalInstance.close();
                $location.path('/boards/' + newBoard.slug);
            });
        };

        $scope.cancel = function() {
            $modalInstance.dismiss();
        };

    });