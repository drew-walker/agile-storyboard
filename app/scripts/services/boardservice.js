'use strict';

angular.module('getAgileApp')
  .factory('BoardService', function (firebaseRef, syncData, ColumnService, $q) {
        var boardsReference = firebaseRef('boards');
        var defaultColumns = ColumnService.getDefaultColumns();
        return {
            getBoards: function() {
                return syncData('boards');
            },
            addBoard: function(board) {
                var deferred = $q.defer();
                var newBoard = boardsReference.push();
                newBoard.set(board, function() {
                    var boardId = newBoard.name();
                    deferred.resolve(boardId);
                    ColumnService.addColumns(boardId, defaultColumns);
                });
                return deferred.promise;
            },
            getFirstBoard: function() {
                return syncData('boards', 1);
            },
            deleteBoard: function(boardId) {
                syncData('boards/' + boardId).$remove();
                ColumnService.deleteColumns(boardId);
            }
        }
  });
