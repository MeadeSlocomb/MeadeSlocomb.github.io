(function() {
  'use strict';

  angular.module('MSPortfolio', ['ui.router'])


    .config([ '$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'js/templates/main.tpl.html',
          controller: 'PortfolioController'
        })
        .state('skills', {
          url: '/skills/',
          templateUrl: 'js/templates/skills.tpl.html',
          controller: 'PortfolioController'
        })
        .state('work', {
          url: '/work/',
          templateUrl: 'js/templates/portfolio.tpl.html',
          controller: 'PortfolioController'
        })
        .state('about', {
          url: '/about/',
          templateUrl: 'js/templates/about.tpl.html',
          controller: 'PortfolioController'
        })
        .state('contact', {
          url: '/contact/',
          templateUrl: 'js/templates/contact.tpl.html',
          controller: 'PortfolioController'
        });

    }
  ]);

}());
