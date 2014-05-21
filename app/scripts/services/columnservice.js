'use strict';

angular.module('getAgileApp')
    .factory('ColumnService', function ($firebase, firebaseRef, syncData, FBURL) {
        return {
            getDefaultColumns: function() {
                return [
                    { 'name' : 'Backlog', stories : [] },
                    { 'name' : 'In Design', stories : [] },
                    { 'name' : 'In Development', stories : [] },
                    { 'name' : 'Ready for Test', stories : [] }
                ];
            },
            getColumns: function(boardId) {
                return syncData('columns/' + boardId);
            },
            addColumn: function(boardId, column) {
                firebaseRef('columns/' + boardId).push(column);
            },
            deleteColumn: function(boardId, columnId) {
                syncData('columns/' + boardId + '/' + columnId).$remove();
            },
            deleteColumns: function(boardId) {
                syncData('columns/' + boardId).$remove();
                this.deleteStories(boardId);
            },
            deleteStories: function(boardId) {
                syncData('stories/' + boardId).$remove();
            },
            addColumns: function(boardId, columns) {
                var ref = firebaseRef('columns/' + boardId);
                for (var index in columns) {
                    ref.push(columns[index]);
                }
            },
            getFirstColumn: function(boardId) {
                var ref = new Firebase(FBURL + '/columns/' + boardId);
                return $firebase(ref.startAt().limit(1));
            },
            getNextColumn: function(boardId, columnId) {
                var ref = new Firebase(FBURL + '/columns/' + boardId);
                return $firebase(ref.startAt(null, columnId).limit(2));
            },
            getPreviousColumn: function(boardId, columnId) {
                var ref = new Firebase(FBURL + '/columns/' + boardId);
                return $firebase(ref.endAt(null, columnId).limit(2));
            }
        };
    });
