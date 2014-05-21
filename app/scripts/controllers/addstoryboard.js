'use strict';

angular.module('getAgileApp')
    .controller('AddStoryboardCtrl', function($scope, $modalInstance, BoardService, $location, loginService) {
        $scope.auth = loginService.auth();

        $scope.add = function(newStoryboard, userId) {
            newStoryboard.admin = userId;
            BoardService.addBoard(newStoryboard).then(function(boardId) {
                BoardService.addUserToBoard(boardId, userId);
                $modalInstance.close();
                $location.path('/boards/' + boardId);
            });
        };

        $scope.cancel = function() {
            $modalInstance.dismiss();
        };

    });