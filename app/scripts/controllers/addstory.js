'use strict';

angular.module('getAgileApp')
    .controller('AddStoryCtrl', function ($scope, $modalInstance, StoryService, selectedBoardId) {
        var storyRef = StoryService.draftStory();
        var storyId = storyRef.name();
        console.log(storyId);
        //console.log($scope.draftStory);
        $scope.newStory = {
            attachments: {}
        };

        $scope.temporary = {};

        var socket = io.connect('/upload');

        $scope.add = function() {
            StoryService.addStory(selectedBoardId, $scope.newStory);
            $modalInstance.close();
        };

        $scope.cancel = function() {
            $modalInstance.dismiss();
        };

        $scope.changeFile = function() {

            var files = $scope.temporary.attachmentFiles;

            angular.forEach(files, function(file, key) {
                var attachmentId = storyRef.child(storyId).child("attachments").push().name();
                $scope.newStory.attachments[attachmentId] = file;
                var stream = ss.createStream();

                ss(socket).emit('file', stream, { size: file.size, name: file.name });
                ss.createBlobReadStream(file).pipe(stream);
            })

        };

    });
