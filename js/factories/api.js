(function () {
	'use strict';
	angular
		.module('lawOrderPie')
		 .factory('API', function($http) {

		 	var getPieData = function(show) {

			 	var gettingData = $http({
				  method: 'GET',
				  // url: "http://api.tvmaze.com/shows/" + id + "/seasons",
				  url : "http://api.tvmaze.com/singlesearch/shows?q=" + show + "&embed=seasons",
				});

				return gettingData;

		 	};

		 	return {
		 		getPieData: getPieData,
		 	};

		 
		 });
})();