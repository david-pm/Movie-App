angular
  .module('movieApp')
  .controller('ResultsController', ['$scope', '$location', 'omdbApi', ResultsController]);

  function ResultsController($scope, $location, omdbApi) {
    $scope.results = [];

    omdbApi.search('star wars')
      .then(function(data) {
        $scope.results = data.Search;
      });

  }
