(function (){

  'use strict';

  angular.module('MSPortfolio')

  .controller('PortfolioController', ['$scope', '$location',

    function ($scope, $location) {

      $scope.js = false;
      $scope.css = false;

      $scope.expandedJS = function(){
        if ($scope.js === false) {
          $scope.js = true;
          } else {
            $scope.js = false;
          }
      };

      $scope.expandedCSS = function(){
        if ($scope.css === false) {
          $scope.css = true;
          } else {
            $scope.css = false;
          }
      };

      $scope.getJSClass = function(path){
        if ($scope.js === false) {
          return "";
          } else {
            return "expanded";
          }
      };

      $scope.getCSSClass = function(path){
        if ($scope.css === false) {
          return "";
          } else {
            return "expanded";
          }
      };

  }

  ]);

}());
