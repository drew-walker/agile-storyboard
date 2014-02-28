'use strict';

angular.module('storyboardModule')
  .factory('BoardService', function ($firebase, ColumnService) {
        var boardsReference = new Firebase('https://getagile.firebaseio.com/boards');
        var defaultColumns = ColumnService.getDefaultColumns();
        return {
            getBoards: function() {
                return $firebase(boardsReference);
            },
            addBoard: function(board) {
                var newBoard = boardsReference.push();
                newBoard.set(board, function() {
                    var boardId = newBoard.name();
                    ColumnService.addColumns(boardId, defaultColumns);
                });
            },
            deleteBoard: function(boardId) {
                var ref = new Firebase('https://getagile.firebaseio.com/boards/' + boardId);
                $firebase(ref).$remove();
            }
        }
  });
