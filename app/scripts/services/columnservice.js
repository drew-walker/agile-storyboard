'use strict';

angular.module('storyboardModule')
  .factory('ColumnService', function ($firebase) {
        var columnsReference = new Firebase('https://getagile.firebaseio.com/columns');
        return {
            getDefaultColumns: function() {
                return [
                    { "name" : 'Backlog', stories : [] },
                    { "name" : 'In Design', stories : [] },
                    { "name" : 'In Development', stories : [] },
                    { "name" : 'Ready for Test', stories : [] }
                ];
            },
            getColumns: function(boardId) {
                var ref = new Firebase('https://getagile.firebaseio.com/columns/' + boardId);
                return $firebase(ref);
            },
            addColumn: function(boardId, column) {
                var ref = new Firebase('https://getagile.firebaseio.com/columns/' + boardId);
                ref.push(column);
            },
            deleteColumn: function(boardId, columnId) {
                var ref = new Firebase('https://getagile.firebaseio.com/columns/' + boardId + '/' + columnId);
                $firebase(ref).$remove();
            },
            addColumns: function(boardId, columns) {
                var ref = new Firebase('https://getagile.firebaseio.com/columns/' + boardId);
                for (var index in columns) {
                    var newColumn = ref.push(columns[index]);
                }
            },
            getFirstColumn: function(boardId) {
                var ref = new Firebase('https://getagile.firebaseio.com/columns/' + boardId);
                return $firebase(ref.startAt().limit(1));
            },
            getNextColumn: function(boardId, columnId) {
                var ref = new Firebase('https://getagile.firebaseio.com/columns/' + boardId);
                return $firebase(ref.startAt(null, columnId).limit(2));
            }
        }
  });
