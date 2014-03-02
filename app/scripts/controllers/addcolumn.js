'use strict';

angular.module('getAgileApp')
    .controller('AddColumnCtrl', function ($scope, $modalInstance, ColumnService, selectedBoardId) {
        $scope.newColumn = {};

        $scope.add = function() {
            ColumnService.addColumn(selectedBoardId, $scope.newColumn);
            $modalInstance.close();
        };

        $scope.cancel = function() {
            $modalInstance.dismiss();
        };

    });
