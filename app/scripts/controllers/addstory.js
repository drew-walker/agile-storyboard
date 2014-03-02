'use strict';

angular.module('getAgileApp')
    .controller('AddStoryCtrl', function ($scope, $modalInstance, StoryService, selectedBoardId) {
        $scope.newStory = {};

        $scope.add = function() {
            StoryService.addStory(selectedBoardId, $scope.newStory);
            $modalInstance.close();
        };

        $scope.cancel = function() {
            $modalInstance.dismiss();
        };

    });
