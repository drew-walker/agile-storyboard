'use strict';

angular.module('storyboardModule')
    .controller('BoardCtrl', function ($scope, $modal, BoardService, ColumnService, StoryService, $routeParams, $firebase, $filter) {
        $scope.boards = BoardService.getBoards();

        $scope.init = function() {
            $scope.numberOfColumns = 0;
        };

        $scope.showNewStoryboardUI = function() {
            $modal.open({
                templateUrl: 'views/addNewStoryboard.html',
                controller: 'AddStoryboardCtrl'
            });
        };

        $scope.showNewColumnUI = function() {
            $modal.open({
                templateUrl: 'views/addNewColumn.html',
                controller: 'AddColumnCtrl',
                resolve: {
                    selectedBoardName: function() {
                        return $scope.selectedBoardName;
                    }
                }
            });
        };

        $scope.showNewStoryUI = function() {
            $modal.open({
                templateUrl: 'views/addNewStory.html',
                controller: 'AddStoryCtrl',
                resolve: {
                    selectedBoardName: function() {
                        return $scope.selectedBoardName;
                    }
                }
            });
        }

        $scope.changeBoards = function(boardName) {
            $scope.init();
            if (boardName) {
                $scope.selectedBoard = $scope.boards.$child(boardName);
                $scope.columns = ColumnService.getColumns(boardName);
                $scope.columns.$on('child_added', function(snapshot) {
                    $scope.loadStories(snapshot.snapshot.name);
                    $scope.numberOfColumns++;
                    $scope.updateColumnWidth($scope.numberOfColumns);
                });
                $scope.columns.$on('child_removed', function() {
                    $scope.numberOfColumns--;
                    $scope.updateColumnWidth($scope.numberOfColumns);
                });
            }
        };

        $scope.updateColumnWidth = function(numberOfColumns) {
            $scope.columnWidth = Math.floor(12 / numberOfColumns);
        };

        $scope.loadStories = function(columnId) {
            var tempStories = StoryService.getStories(columnId);
            tempStories.$on('loaded', function() {
                var storiesArray = $filter('orderByPriority')(tempStories);
                if (storiesArray.length > 0) {
                    $scope.columns[columnId].stories = storiesArray;
                };
            });
        };

        $scope.boards.$on("loaded", function(boards) {
            $scope.selectedBoardName = $routeParams.boardId;
        });

        $scope.$watch('selectedBoardName', function(newVal) {
            $scope.changeBoards(newVal);
        });

        $scope.deleteColumn = function(columnKey) {
            ColumnService.deleteColumn($scope.selectedBoardName, columnKey);
        };

        $scope.deleteStoryboard = function() {
            BoardService.deleteBoard($scope.selectedBoardName);
        };

        $scope.deleteStory = function(columnKey, storyKey) {
            StoryService.deleteStory(columnKey, storyKey);
        };

        $scope.progressStory = function(columnId, storyId) {
            StoryService.progressStory($scope.selectedBoardName, columnId, storyId);
        };



        $scope.backlogColumnRef = new Firebase("https://getagile.firebaseio.com/stories/-JGrxUItE1N7iP7vjfUH");
        $scope.backlogStories = $firebase($scope.backlogColumnRef);

        $scope.sortableOptions = {
            stop: function(e, ui) {
                angular.forEach($scope.columns, function(column, index) {
                    angular.forEach(column.stories, function(story, index) {
                        $scope.backlogColumnRef.child(story.$id).setPriority(index);
                    });
                });
            },
            axis: 'y'
        };

        $scope.init();
    });
