// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var climaCtrl = angular.module('starter', ['ionic']);


climaCtrl.run(function ($ionicPlatform) {
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
  $ionicPlatform.on('resume',function () {
    navigator.geolocation.getCurrentPosition(exito, error);
  });
});

climaCtrl.controller('currentLocationWeather', ['$scope', '$http', '$ionicPopup', function ($scope, $http, $ionicPopup) {
  $scope.city = null;
  if ($scope.city == null) {
    navigator.geolocation.getCurrentPosition(exito, error);
  } else {

  }


  function exito(position) {
    var latitud = "lat=" + position.coords.latitude;
    var longitud = "&lon=" + position.coords.longitude;
    var appid = "&appid=";
    var key = "2aba3adc8f9a3eed10e9d43a47edd216";
    var url = 'http://api.openweathermap.org/data/2.5/weather?';
    var request = url + latitud + longitud + appid + key;

    $http.get(request).then(function httpSuccess(response) {
      $scope.weather = response.data;
    }, function httpError(response) {
      if (response.data == null) {
        $ionicPopup.alert({
          title: 'Error', template: 'No hay conexión!'
        });
      }
    });
  }

  function error(error) {
    $ionicPopup.alert({
      title: 'Error', template: error.message
    });
  }

  $scope.changeCity = function (buscar) {
    $scope.city = buscar.ciudad;
    buscar.ciudad = '';
    var Q = "q=";
    var appid = "&appid=";
    var key = "2aba3adc8f9a3eed10e9d43a47edd216";
    var url = 'http://api.openweathermap.org/data/2.5/weather?';
    var request = url + Q + $scope.city + appid + key;
    $http.get(request).then(function (response) {
      $scope.weather = response.data;
    }, function httpError(response) {
      if (response.data == null) {
        $ionicPopup.alert({
          title: 'Error', template: 'No hay conexión!'
        });
      }
    });
  }

}]);
