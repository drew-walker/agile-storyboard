'use strict';

angular.module('getAgileApp')
    .directive('dragAndDropFileUpload', function () {
        return {
            templateUrl: 'views/dragAndDropFileUpload.html',
            restrict: 'C',
            scope: {
                onFileDrop: "&"
            },
            require: "?ngModel",
            link: function($scope, element, attrs, ngModel) {
                $scope.attachments = [];

                $scope.fileAdded = function(file) {
                    var reader = new FileReader();
                    reader.onload = function (event) {
                        $scope.$apply(function() {
                            $scope.attachments.push(event.target.result);
                        });
                    };
                    reader.readAsDataURL(file);
                };

                element.on('dragover', function() {
                    return false;
                }).on('dragend', function() {
                    return false;
                }).on('drop', function(event) {
                    event.preventDefault();

                    var files = event.originalEvent.dataTransfer.files;
                    angular.forEach(files, function(file, key) {
                        $scope.fileAdded(file);
                    });

                    ngModel.$setViewValue(files);
                    $scope.onFileDrop();
                    return false;
                })
            }
        };
    });
