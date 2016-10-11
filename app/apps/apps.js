angular.module('appList.templates', ['ngRoute'])
.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/apps', {
      templateUrl: 'apps/apps.html',
      controller: 'AppsCtrl'
    })
    .when('/apps/:id', {
      templateUrl: 'apps/app-details.html',
      controller: 'AppDetailsCtrl'
    })
}])
.controller('AppsCtrl', ['$scope', function($scope){
  console.log('apps init')
}])
.controller('AppDetailsCtrl', ['$scope', function($scope){
  console.log('app details init')
}])
