// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var climaCtrl = angular.module('starter', ['ionic']);

document.addEventListener("deviceready", onDeviceReady, false);


function onDeviceReady() {
  navigator.geolocation.getCurrentPosition(exito, error);
}


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
});

climaCtrl.controller('currentLocationWeather', function ($scope, $http) {
  var options = {timeout: 10000};
  navigator.geolocation.watchPosition(exito, error, options);

  function exito(position) {
    var latitud = "lat=" + position.coords.latitude;
    var longitud = "&lon=" + position.coords.longitude;
    var appid = "&appid=";
    var key = "2aba3adc8f9a3eed10e9d43a47edd216";
    var url = 'http://api.openweathermap.org/data/2.5/weather?';
    var request = url + latitud + longitud + appid + key;

    $http.get(request).then(function (response) {
      $scope.weather = response.data;
    });
  }

  function error(error) {
    window.alert('code: ' + error.code + '\n' +
      'message: ' + error.message + '\n');
  }

  $scope.changeCity = function () {
    $scope.buscar = '';
    $scope.city = $scope.buscar;
    window.alert($scope.city);
    var Q = "q=";
    var appid = "&appid=";
    $scope.city = "bogota";
    var key = "2aba3adc8f9a3eed10e9d43a47edd216";
    var url = 'http://api.openweathermap.org/data/2.5/weather?';
    var request = url + Q + $scope.city + appid + key;
    $http.get(request).then(function (response) {
        $scope.weather = response.data;
      }
    )
  }

});
