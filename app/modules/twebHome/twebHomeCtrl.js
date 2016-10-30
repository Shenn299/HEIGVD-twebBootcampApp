(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:twebHomeCtrl
	* @description
	* # twebHomeCtrl
	* Controller of the app
	*/

	angular
		.module('twebHome')
		.controller('TwebHomeCtrl', TwebHome);

	TwebHome.$inject = ['$scope', 'TwebHomeService'];

	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function TwebHome($scope, TwebHomeService) {

		var vm = this;

        // Print welcome message
		vm.welcomeMsg = "Welcome to SHA Inspector service !";

        // Print the number of times this service was already used
		TwebHomeService.nbOfRequest()
			.then(function successCallback(response) {
				$scope.nbOfRequest = response.data.count;				

			}, function errorCallback(response) {
				$scope.errorMsg = "There is an error (INTERNAL SERVER ERROR 500)";
			});
	}

})();
