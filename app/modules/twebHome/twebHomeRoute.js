'use strict';

/**
 * @ngdoc function
 * @name app.route:twebHomeRoute
 * @description
 * # twebHomeRoute
 * Route of the app
 */

angular.module('twebHome')
	.config(['$stateProvider', function ($stateProvider) {

		$stateProvider
			.state('twebHome', {
				url: '/twebHome',
				templateUrl: 'app/modules/twebHome/twebHome.html',
				controller: 'TwebHomeCtrl',
				controllerAs: 'vm'
			});
	}]);
