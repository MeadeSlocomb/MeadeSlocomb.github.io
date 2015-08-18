(function (){

  'use strict';

  angular.module('MSPortfolio')

  .controller('PortfolioController', ['$scope', '$location',

    function ($scope, $location) {

      ////////////////////////////////
      //  Skill icon expansion ///////
      ////////////////////////////////

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


      //////////////////////////////////////
      //  Show portfolio details on click //
      //////////////////////////////////////


      $scope.codebytes = false;
      $scope.popquiz = false;
      $scope.fud = false;

      $scope.showCBDetails = function(){
        if ($scope.codebytes === false){
          return "";
        } else {
          return 'showDetails';
        }
      };

      $scope.iconCB = function(){
        if ($scope.codebytes === false){
          return "";
        } else {
          return 'fa-rotate-180';
        }
      };

      $scope.detailsCB = function(){
        if ($scope.codebytes === false) {
          $scope.codebytes = true;
        } else {
          $scope.codebytes = false;
        }
      };

      $scope.showPQDetails = function(){
        if ($scope.popquiz === false){
          return "";
        } else {
          return 'showDetails';
        }
      };

      $scope.iconPQ = function(){
        if ($scope.popquiz === false){
          return "";
        } else {
          return 'fa-rotate-180';
        }
      };

      $scope.detailsPQ = function(){
        if ($scope.popquiz === false) {
          $scope.popquiz = true;
        } else {
          $scope.popquiz = false;
        }
      };

      $scope.showFDetails = function(){
        if ($scope.fud === false){
          return "";
        } else {
          return 'showDetails';
        }
      };

      $scope.iconF = function(){
        if ($scope.fud === false){
          return "";
        } else {
          return 'fa-rotate-180';
        }
      };

      $scope.detailsF = function(){
        if ($scope.fud === false) {
          $scope.fud = true;
        } else {
          $scope.fud = false;
        }
      };

    }


  ]);

}());
