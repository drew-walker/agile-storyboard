


angular.module('storyboardModule', ['firebase', 'ui.sortable', 'ui.bootstrap', 'ngRoute'])
    .config(function($routeProvider) {
        $routeProvider.when('/boards/:boardId', {
            templateUrl: 'views/board.html',
            controller: 'BoardCtrl'
        }).when('/dashboard', {
            templateUrl: 'views/dashboard.html',
            controller: 'DashboardCtrl'
        }).when('/release-notes', {
            templateUrl: 'views/release-notes.html',
            controller: 'ReleaseNotesCtrl'
        })

    });