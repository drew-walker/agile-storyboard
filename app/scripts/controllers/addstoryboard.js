'use strict';

angular.module('getAgileApp')
    .controller('AddStoryboardCtrl', function($scope, $modalInstance, BoardService, $location) {
        $scope.newStoryboard = {};

        $scope.add = function() {
            BoardService.addBoard($scope.newStoryboard).then(function(boardId) {
                $modalInstance.close();
                $location.path('/boards/' + boardId);
            });
        };

        $scope.cancel = function() {
            $modalInstance.dismiss();
        };

    });