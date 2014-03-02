'use strict';

angular.module('getAgileApp')
  .factory('BoardService', function (firebaseRef, syncData, ColumnService) {
        var boardsReference = firebaseRef('boards');
        var defaultColumns = ColumnService.getDefaultColumns();
        return {
            getBoards: function() {
                return syncData('boards');
            },
            addBoard: function(board) {
                var newBoard = boardsReference.push();
                newBoard.set(board, function() {
                    var boardId = newBoard.name();
                    ColumnService.addColumns(boardId, defaultColumns);
                });
            },
            deleteBoard: function(boardId) {
                syncData('boards/' + boardId).$remove();
                ColumnService.deleteColumns(boardId);
            }
        }
  });
