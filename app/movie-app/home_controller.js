angular
  .module('movieApp')
  .controller('HomeController', ['$scope', '$interval', 'omdbApi', '$exceptionHandler', 'PopularMovies', HomeController]);

  function HomeController($scope, $interval, omdbApi, $exceptionHandler, PopularMovies) {
    var index = 0;
    var result = [];
    var findMovie = function(id) {
      omdbApi.find(id)
        .then(function(data) {
          $scope.result = data;
        })
        .catch(function(error) {
          $exceptionHandler(error);
        });
    }

    PopularMovies.query(function(data) {
        result = data;
        findMovie(result[0]);
        $interval(function() {
          ++index;
          findMovie(result[index % result.length]);
        }, 5000);
      });

  }
