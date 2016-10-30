(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name app.controller:twebShaCtrl
     * @description
     * # twebShaCtrl
     * Controller of the app
     */

    angular
        .module('twebSha')
        .controller('TwebShaCtrl', TwebSha);

    TwebSha.$inject = ['$scope', 'TwebShaService'];

    /*
     * recommend
     * Using function declarations
     * and bindable members up top.
     */

    function TwebSha($scope, TwebShaService) {
        var vm = this;

        // The first 100 sha of commits
        var shas = [];

        $scope.searchPattern = function (user) {
            // Get the value from html
            $scope.username = angular.copy(user.username);
            $scope.reponame = angular.copy(user.reponame);
            $scope.pattern = angular.copy(user.pattern);

            // GET async commits request
            TwebShaService.GetCommits($scope)
                .then(function successCallback(response) {
                    // this callback will be called asynchronously
                    // when the response is available

                    // SHAs saved
                    shas = [];

                    // We only save the SHA of each commit
                    for (var i = 0; i < response.data.length; ++i) {
                        shas.push(response.data[i].sha);
                    }

                    // Results title
                    $scope.resultMsg1 = 'Results for the repository ';
                    $scope.resultMsg2 = ' owned by ';

                    // Research the pattern in SHAs
                    var patternsToResearch = $scope.pattern;
                    var shasContainPattern = TwebShaService.SearchPatterns(shas, patternsToResearch);

                    // Results details
                    $scope.nbCommits = response.data.length;
                    $scope.nbShasContainPattern = shasContainPattern.length;

                    $scope.resultDetailsMsg1 = 'On the first ';
                    $scope.resultDetailsMsg2 = ' SHAs commits, ';
                    $scope.resultDetailsMsg3 = ' contain the pattern ';
                    $scope.resultDetailsMsg4 = ' :';

                    $scope.shasContainPattern = shasContainPattern;

                    // Set the datas for the doughnut graph
                    vm.labels = ['Nb total of SHAs', 'SHAs which contain the pattern \"' + $scope.pattern + '\"'];
                    vm.data = [$scope.nbCommits, $scope.nbShasContainPattern];
                    vm.colors = [
                        // Color for SHAs which don't contain the pattern (blue)
                        "#0000FF",
                        // Color for SHAs which contain the pattern (orange)
                        "#FF8000"];

                    // Save this request in database
                    TwebShaService.SaveRequest()
                        .then(function successCallback(response) {
                        }, function errorCallback(response) {
                            $scope.errorMsg = "There is an error (INTERNAL SERVER ERROR 500)";
                        });


                }, function errorCallback(response) {
                    // called asynchronously if an error occurss
                    // or server returns response with an error status.
                    $scope.errorMsg = "There is an error (INTERNAL SERVER ERROR 500)";
                });

        }

    };

})();
