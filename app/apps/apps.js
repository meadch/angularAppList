angular.module('appList.templates', ['ngRoute'])
.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/apps', {
      templateUrl: 'apps/apps.html',
      controller: 'AppsCtrl'
    })
}])
.controller('AppsCtrl', ['$scope', function($scope){
  console.log('apps init')
}])
