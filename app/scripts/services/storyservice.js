'use strict';

angular.module('getAgileApp')
    .factory('StoryService', function (firebaseRef, syncData, ColumnService) {
        return {
            draftStory: function(boardId) {
                return firebaseRef('stories/' + boardId).push();
            },
            addStory: function(boardId, story) {
                var column = ColumnService.getFirstColumn(boardId);
                var boardId = boardId;

                column.$on('loaded', function() {
                    var columnId = column.$getIndex(0)[0];
                    var ref = firebaseRef('stories/' + boardId);
                    story.columnId = columnId;
                    var newStory = ref.push();
                    newStory.set(story);
                });

            },
            getStory: function(boardId, storyId) {
                return syncData('stories/' + boardId + '/' + storyId);
            },
            getStories: function(boardId) {
                return syncData('stories/' + boardId);
            },
            deleteStory: function(boardId, storyId) {
                syncData('stories/' + boardId + '/' + storyId).$remove();
            },
            progressStory: function(boardId, columnId, storyId) {
                var self = this;
                var nextColumn = ColumnService.getNextColumn(boardId, columnId);
                var boardId = boardId;
                var columnId = columnId;
                var storyId = storyId;

                nextColumn.$on('loaded', function() {
                    var nextColumnId = nextColumn.$getIndex()[1];
                    var story = self.getStory(boardId, storyId);
                    story.$on('loaded', function() {
                        var ref = firebaseRef('stories/' + boardId + '/' + storyId);
                        ref.update({ "columnId" : nextColumnId });
                    });
                });
            },
            regressStory: function(boardId, columnId, storyId) {
                var self = this;
                var previousColumn = ColumnService.getPreviousColumn(boardId, columnId);
                var boardId = boardId;
                var columnId = columnId;
                var storyId = storyId;

                previousColumn.$on('loaded', function() {
                    var previousColumnId = previousColumn.$getIndex()[0];
                    var story = self.getStory(boardId, storyId);
                    story.$on('loaded', function() {
                        var ref = firebaseRef('stories/' + boardId + '/' + storyId);
                        ref.update({ "columnId" : previousColumnId });
                    });
                });
            }
        };
    });
