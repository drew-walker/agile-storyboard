'use strict';

angular.module('getAgileApp')
    .controller('BoardCtrl', function ($scope, $rootScope, $modal, syncData, firebaseRef, BoardService, ColumnService, StoryService, $routeParams, $firebase, $filter, $sce) {
        $scope.selectedBoardId = $routeParams.boardId;
        $scope.columns = {};

        $rootScope.$on("$firebaseSimpleLogin:login", function(e, user) {
            $scope.boardsIndex = new FirebaseIndex(firebaseRef('users/' + user.uid + '/boards'), firebaseRef('boards/'));
        });

        $scope.showNewStoryUI = function() {
            $modal.open({
                templateUrl: 'views/addNewStory.html',
                controller: 'AddStoryCtrl',
                resolve: {
                    selectedBoardId: function() {
                        return $scope.selectedBoardId;
                    }
                },
                backdrop: 'static'
            });
        };

        $scope.showNewColumnUI = function() {
            $modal.open({
                templateUrl: 'views/addNewColumn.html',
                controller: 'AddColumnCtrl',
                resolve: {
                    selectedBoardId: function() {
                        return $scope.selectedBoardId;
                    }
                }
            });
        };

        $rootScope.$broadcast('changeBoard', $routeParams.boardId);

        var selectedBoard = syncData('boards/' + $routeParams.boardId);
        selectedBoard.$on('loaded', function() {
            $scope.selectedBoard = selectedBoard;
        })

        var stories = syncData('stories/' + $routeParams.boardId);
        stories.$on('loaded', function() {
            $scope.stories = stories;
        });

        $scope.adminsIndex = new FirebaseIndex(firebaseRef('admins/' + $routeParams.boardId), firebaseRef('users/'));

        $scope.adminsIndex.on('child_added', function(snapshot) {
            var admin = snapshot.val();
            $scope.admin = admin;
        });

        $scope.highlight = function(html, searchFilter) {
            if (html) {
                return $sce.trustAsHtml($filter('highlight')(html, searchFilter, false));
            } else {
                return '';
            }
        };

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

        $scope.showEditStoryUI = function(story) {
            $modal.open({
                templateUrl: 'views/editStory.html',
                controller: 'EditStoryCtrl',
                resolve: {
                    story: function() {
                        return story;
                    },
                    boardId: function() {
                        return $scope.selectedBoardId;
                    }
                },
                backdrop: 'static'
            });
        };

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

        $scope.addPersonToTeam = function() {
            $scope.teamsIndex.add($scope.newTeamMemberUserId);
            $scope.boardsIndex.add($scope.selectedBoardId);
            $scope.newTeamMemberUserId = '';
        }

        $scope.removePersonFromTeam = function(userId) {
            //console.log(userId);
            $scope.teamsIndex.drop(userId);
            $scope.boardsIndex.drop($scope.selectedBoardId);
        };

        $scope.progressStory = function(columnId, storyId) {
            StoryService.progressStory($scope.selectedBoardId, columnId, storyId);
        };

        $scope.regressStory = function(columnId, storyId) {
            StoryService.regressStory($scope.selectedBoardId, columnId, storyId);
        };

//        $scope.sortableOptions = {
//            stop: function(e, ui) {
//                var i = 1;
//                angular.forEach($scope.stories, function(story, index) {
//                    if (story.$id) {
//                        story.$priority = i;
//                        story.isCurrentFocus = null;
//                        stories.$save(story.$id);
//                        i++;
//                    }
//
//                });
//            },
//            axis: 'y'
//        };
    });
