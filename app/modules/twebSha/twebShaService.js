(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:twebShaService
	 * @description
	 * # twebShaService
	 * Service of the app
	 */

	angular
		.module('twebSha')
		.factory('TwebShaService', TwebShaService);

	TwebShaService.$inject = ['$http'];

	function TwebShaService($http) {

		var service = {
			GetCommits: function ($scope) {

				return $http({
					method: 'GET',
					url: 'https://api.github.com/repos/' + $scope.username + '/' + $scope.reponame + '/commits',
					qs: {
						access_token: 'ba699b1c3198ca468a5d8f5b205c1b8059936080'
					},
					headers: {
						'Accept': 'application/vnd.github.VERSION.sha'
					},
					params: {
						per_page: 100
					}

				});

			},

			SearchPatterns: function (shas, patternsToResearch) {

				var shaContainsPattern = [];

				for (var i = 0; i < shas.length; ++i) {
					if (shas[i].indexOf(patternsToResearch) != -1) {
						shaContainsPattern.push(shas[i]);
					}
				}

				return shaContainsPattern;

			},

			// Save the request in database
			SaveRequest: function () {
				return $http({
					method: 'GET',
					url: '/api/request'
				});
			}

		};

		return service;

	}


})();
