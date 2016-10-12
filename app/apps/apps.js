angular.module('appList.apps', ['ngRoute'])
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
.factory('AppFactory', function($http){
  var factory = {},
      apps = [];

  factory.getApps = function(){
    return $http.get('json/apps.json')
    .then( (response) => {
      apps = response.data;
      return apps;
    });
  }

  factory.getApp = function(id){
    if (!apps.length){
      return factory.getApps()
                .then(findAppById);
    } else {
      return Promise.resolve(findAppById());
    }

    function findAppById(){
      return apps.find( (app)=> {
        // Using id from getApp closure
        return app.id === parseInt(id);
      });
    }
  }

  return factory;
})
.controller('AppsCtrl', ['$scope', 'AppFactory', function($scope, AF){
  $scope.apps = [];
  // Initialize
  init();
  function init(){
    // grabbing list of apps
    AF.getApps()
    .then((apps)=>{
      $scope.apps = apps;
    });
  }

}])
.controller('AppDetailsCtrl', ['$scope', '$routeParams', 'AppFactory', function($scope, $routeParams, AF){
  $scope.id = $routeParams.id;

  init();
  function init(){
    // grabbing app
    AF.getApp($scope.id)
      .then( (app) => {
        $scope.app = app;
      });
  }

}])
