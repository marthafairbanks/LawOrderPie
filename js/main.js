(function() {
    'use strict';
    angular
        .module('lawOrderPie', ['ui.router'])
        .config(function($stateProvider, $urlRouterProvider) {

	  	$urlRouterProvider.otherwise("/");

	  	$stateProvider
	    .state('home', {
      	url: '/',
      	views: {
      		'main': {
		        templateUrl: '../views/home.html',
		        controller: 'mainController',
		        controllerAs: 'controller'
		      }
		  },
	    });
	});
})();


