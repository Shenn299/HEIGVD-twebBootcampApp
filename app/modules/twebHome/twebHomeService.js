(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:twebHomeService
	 * @description
	 * # twebHomeService
	 * Service of the app
	 */

	angular
		.module('twebHome')
		.factory('TwebHomeService', TwebHomeService);

	TwebHomeService.$inject = ['$http'];

	function TwebHomeService($http) {

		var service = {

			// GET the number of document in request collection database
			nbOfRequest: function () {
				return $http({
					method: 'GET',
					url: '/api/request/count'
				});
			}
		};

		return service;
	}

})();
