angular
  .module('movieApp')
  .controller('ResultsController', ['$scope', '$location', '$exceptionHandler', 'omdbApi', ResultsController]);

  function ResultsController($scope, $location, $exceptionHandler, omdbApi) {
    var query = $location.search().q;
    $scope.results = [];

    omdbApi.search(query)
      .then(function(data) {
        $scope.results = data.Search;
      })
      .catch(function(error) {
        $exceptionHandler(error);
      });

    $scope.expand = function expand(index, id) {
      omdbApi.find(id)
        .then(function(data) {
          $scope.results[index].data = data;
          $scope.results[index].open = true;
        });
    }

  }
