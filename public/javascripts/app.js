(function(){

  angular.module('dreamslab', ['ngRoute', 'ngMaterial'])
      .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {templateUrl : '/assets/views/home.html', controller : 'HomeCtrl'}),

            $routeProvider.when('/about', {templateUrl : '/assets/views/about.html', controller : 'AboutCtrl'}),

            $routeProvider.when('/contact', {templateUrl : '/assets/views/contact.html', controller : 'ContactCtrl'}),

            $routeProvider.otherwise({redirectTo: '/'});
      }])
      .config(function($mdThemingProvider, $mdIconProvider){
        $mdThemingProvider.theme('default')
            .primaryPalette('brown')
            .accentPalette('red');
      }).controller('HomeCtrl', function($scope){

    $scope.content = "This is home."

  }).controller('AboutCtrl', function($scope, $http){

    $http.get('/about').success(function(data){
      $scope.message = data.message;
    }).error(function(){
      $scope.message = "Error getting the message from REST Call.";
    });

  }).controller('ContactCtrl', function($scope, $http){
    $http.get('/contact').success(function(data){
      $scope.message = data.message;
    }).error(function(){
      $scope.message = "Error getting the message from REST Call.";
    });


  });

})();
