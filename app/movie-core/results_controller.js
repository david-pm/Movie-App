angular
  .module('movieApp')
  .controller('ResultsController', ['$scope', '$location', 'omdbApi', ResultsController]);

  function ResultsController($scope, $location, omdbApi) {
    var query = $location.search().q;
    $scope.results = [];

    omdbApi.search(query)
      .then(function(data) {
        $scope.results = data.Search;
      })
      .catch(function(error) {
        $scope.errorMessage = "Something went wrong!";
      });

  }
