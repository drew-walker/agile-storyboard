'use strict';

angular.module('storyboardModule')
    .factory('StoryService', function ($firebase, ColumnService) {
        var storiesReference = new Firebase('https://getagile.firebaseio.com/stories');
        return {
            addStory: function(boardId, story) {
                var column = ColumnService.getFirstColumn(boardId);

                column.$on('loaded', function() {
                    var columnId = column.$getIndex(0)[0];
                    var ref = new Firebase('https://getagile.firebaseio.com/stories/' + columnId);
                    var newStory = ref.push();
                    newStory.set(story);
                });

            },
            getStory: function(columnId, storyId) {
                var ref = new Firebase('https://getagile.firebaseio.com/stories/' + columnId + '/' + storyId);
                return $firebase(ref);
            },
            getStories: function(columnId) {
                var ref = new Firebase('https://getagile.firebaseio.com/stories/' + columnId);
                return $firebase(ref);
            },
            deleteStory: function(columnId, storyId) {
                var ref = new Firebase('https://getagile.firebaseio.com/stories/' + columnId + '/' + storyId);
                $firebase(ref).$remove();
            },
            progressStory: function(boardId, columnId, storyId) {
                var self = this;
                var nextColumn = ColumnService.getNextColumn(boardId, columnId);
                var columnId = columnId;
                var storyId = storyId;

                nextColumn.$on('loaded', function() {
                    var nextColumnId = nextColumn.$getIndex()[1];
                    var story = self.getStory(columnId, storyId);
                    story.$on('loaded', function() {
                        var ref = new Firebase('https://getagile.firebaseio.com/stories/' + nextColumnId);
                        ref.push({ "summary" : story.summary, "description" : story.description ? story.description : "" });
                        self.deleteStory(columnId, storyId);
                    });
                });
            }
        };
    });
