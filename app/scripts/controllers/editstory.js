'use strict';

angular.module('getAgileApp')
    .controller('EditStoryCtrl', function ($scope, $modalInstance, StoryService, story, boardId, syncData) {
        var storyRef = syncData('stories/' + boardId + '/' + story.$id);
        storyRef.$on('loaded', function() {
            $scope.story = storyRef;
        });

        $scope.save = function() {
            storyRef.$save();
            $modalInstance.dismiss();
        };

        $scope.cancel = function() {
            $modalInstance.dismiss();
        };

    });
