'use strict';

/**
 * @ngdoc function
 * @name app.route:twebShaRoute
 * @description
 * # twebShaRoute
 * Route of the app
 */

angular.module('twebSha')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('twebSha', {
				url:'/twebSha',
				templateUrl: 'app/modules/twebSha/twebSha.html',
				controller: 'TwebShaCtrl',
				controllerAs: 'vm'
			});

		
	}]);
