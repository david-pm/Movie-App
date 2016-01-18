angular
  .module('movieApp')
  .controller('ResultsController', ['$scope', '$location', '$exceptionHandler', '$log', 'omdbApi', ResultsController]);

  function ResultsController($scope, $location, $exceptionHandler, $log, omdbApi) {
    var query = $location.search().q;
    $log.debug('Controller loaded with query: ', query);
    $scope.results = [];

    omdbApi.search(query)
      .then(function(data) {
        $log.debug('Data returned for query: ', query, data);
        $scope.results = data.Search;
      })
      .catch(function(error) {
        $exceptionHandler(error);
      });

    function findMovie(index, id) {
      omdbApi.find(id)
        .then(function(data) {
          $scope.results[index].data = data;
          $scope.results[index].open = true;
        });
    }

    $scope.expandOrClose = function expandOrClose(index, id) {
      if ($scope.results[index].data) {
        if ($scope.results[index].data.imdbID !== id) {
          $scope.results[index].open = false;
        } else {
          findMovie(index, id);
        }
      } else {
        findMovie(index, id);
      } // else
    } // extend

  }
