'use strict';

angular.module('storyboardModule')
    .controller('AddStoryboardCtrl', function($scope, $modalInstance, BoardService) {
        $scope.newStoryboard = {};

        $scope.add = function() {
            BoardService.addBoard($scope.newStoryboard);
            $modalInstance.close();
        };

        $scope.cancel = function() {
            $modalInstance.dismiss();
        };

    });