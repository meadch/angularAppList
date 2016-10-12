'use strict';

// Declare app level module which depends on views, and components
angular.module('appList', [
  'ngRoute',
  'appList.view1',
  'appList.view2',
  'appList.apps'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/apps'});
}]);
