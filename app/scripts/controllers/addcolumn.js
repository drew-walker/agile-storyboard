'use strict';

angular.module('storyboardModule')
    .controller('AddColumnCtrl', function ($scope, $modalInstance, ColumnService, selectedBoardName) {
        $scope.newColumn = {};

        $scope.add = function() {
            ColumnService.addColumn(selectedBoardName, $scope.newColumn);
            $modalInstance.close();
        };

        $scope.cancel = function() {
            $modalInstance.dismiss();
        };

    });
