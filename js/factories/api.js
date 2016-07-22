(function () {
	'use strict';
	angular
		.module('lawOrderPie')
		 .factory('API', function($http) {

		 	var getPieData = function(id) {

			 	var gettingData = $http({
				  method: 'GET',
				  url: "http://api.tvmaze.com/shows/" + id + "/seasons",
				});

				return gettingData;

		 	};

		 	return {
		 		getPieData: getPieData,
		 	};

		 
		 });
})();