'use strict';

angular.module('storyboardModule')
    .controller('AddStoryCtrl', function ($scope, $modalInstance, StoryService, selectedBoardName) {
        $scope.newStory = {};

        $scope.add = function() {
            StoryService.addStory(selectedBoardName, $scope.newStory);
            $modalInstance.close();
        };

        $scope.cancel = function() {
            $modalInstance.dismiss();
        };

    });
