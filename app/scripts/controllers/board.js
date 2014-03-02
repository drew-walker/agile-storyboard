'use strict';

angular.module('getAgileApp')
    .controller('BoardCtrl', function ($scope, $rootScope, $modal, syncData, firebaseRef, BoardService, ColumnService, StoryService, $routeParams, $firebase, $filter) {
        $scope.selectedBoardId = $routeParams.boardId;
        $scope.columns = {};

        $rootScope.$broadcast('changeBoard', $routeParams.boardId);

        var selectedBoard = syncData('boards/' + $routeParams.boardId);
        selectedBoard.$on('loaded', function() {
            $scope.selectedBoard = selectedBoard;
        })

        var stories = syncData('stories/' + $routeParams.boardId);
        stories.$on('loaded', function() {
            $scope.stories = stories;
        });

        var columns = syncData('columns/' + $routeParams.boardId);

        columns.$on('loaded', function() {
            $scope.refreshColumns(columns);
        })

        columns.$on('child_added', function() {
            $scope.refreshColumns(columns);
        });

        columns.$on('child_removed', function() {
            $scope.refreshColumns(columns);
        });

        $scope.refreshColumns = function(columns) {
            $scope.columns = columns;
            $scope.numberOfColumns = Object.keys(columns.$getIndex()).length;
            $scope.updateColumnWidth($scope.numberOfColumns);
        };

        $scope.updateColumnWidth = function(numberOfColumns) {
            $scope.columnWidth = Math.floor(12 / numberOfColumns);
        };

        $scope.deleteColumn = function(columnKey) {
            ColumnService.deleteColumn($scope.selectedBoardId, columnKey);
        };

        $scope.deleteStory = function(storyKey) {
            StoryService.deleteStory($scope.selectedBoardId, storyKey);
        };

        $scope.progressStory = function(columnId, storyId) {
            StoryService.progressStory($scope.selectedBoardId, columnId, storyId);
        };

//        $scope.sortableOptions = {
//            stop: function(e, ui) {
//                angular.forEach($scope.stories, function(story, index) {
//                    if (story.$id) {
//                        console.log(index);
//                        console.log(story.$id);
//                    }
//                    //$scope.stories.child(story.$id).setPriority(index);
//                });
//            },
//            axis: 'y'
//        };
    });
