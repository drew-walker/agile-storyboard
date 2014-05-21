'use strict';

angular.module('getAgileApp')
    .factory('IndexService', function (firebaseRef) {
        return {
            // TEAMS INDEXES
            addBoardToIndexForUser: function (boardId, userId) {
                firebaseRef('users/' + userId + '/boards/' + boardId).set(1);
            },
            addUserToIndexForBoardTeam: function (boardId, userId) {
                firebaseRef('teams/' + boardId + '/' + userId).set(1);
            },
            removeBoardFromIndexForUser: function (boardId, userId) {
                firebaseRef('users/' + userId + '/boards/' + boardId).remove();
            },
            removeUserFromIndexForBoardTeam: function (boardId, userId) {
                firebaseRef('teams/' + boardId + '/' + userId).remove();
            }
        };
    });
