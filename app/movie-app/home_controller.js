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

    // PopularMovies.get(function(data) {
    //     result = data;
    //     findMovie(result[0]);
    //     $interval(function() {
    //       ++index;
    //       findMovie(result[index % result.length]);
    //     }, 5000);
    //   });

    PopularMovies.get()
      .then(function(data) {
    // var data = ["tt0076759", "tt0080684", "tt0086190"];
        results = data;
        findMovie(results[0]);
        $interval(function() {
          ++index;
          findMovie(results[index % results.length]);
        }, 5000);
      });

  }
