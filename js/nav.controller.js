(function (){

  'use strict';

  angular.module('MSPortfolio')

  .controller('NavController', ['$scope', '$location',

    function ($scope, $location) {

      $scope.getCClass = function(path){
        if ($location.path() == path) {
          return "activeC";
          } else {
            return "";
          }
      };

      $scope.getTClass = function(path){
        if ($location.path() == path) {
          return "activeT";
          } else {
            return "";
          }
      };

  }

  ]);

}());
