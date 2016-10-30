(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:twebPlusService
	 * @description
	 * # twebPlusService
	 * Service of the app
	 */

  	angular
		.module('twebPlus')
		.factory('TwebPlusService', TwebPlus);

		TwebPlus.$inject = ['$http'];

		function TwebPlus ($http) {

		}

})();
