// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.controller('WeatherCtrl', function ($scope, $http) {

    var Q = "q=";
    var appid = "&appid=";
    var city  = "medellin";
    var key = "2aba3adc8f9a3eed10e9d43a47edd216";
    var url = 'http://api.openweathermap.org/data/2.5/weather?';
    var request = url + Q + city  + appid + key;

    $scope.changeCity = function(buscar){
      city  = buscar.ciudad;
      request = url + Q + city  + appid + key;
      $http.get(request).then(function (response) {
        $scope.weath = response.data;
      });
    }
    $http.get(request).then(function (response) {
      $scope.weath = response.data;
    });
  })


  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });

  })
