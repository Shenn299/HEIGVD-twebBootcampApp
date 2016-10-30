'use strict';

/**
 * @ngdoc function
 * @name app.route:twebPlusRoute
 * @description
 * # twebPlusRoute
 * Route of the app
 */

angular.module('twebPlus')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('twebPlus', {
				url:'/twebPlus',
				templateUrl: 'app/modules/twebPlus/twebPlus.html',
				controller: 'TwebPlusCtrl',
				controllerAs: 'vm'
			});

		
	}]);
