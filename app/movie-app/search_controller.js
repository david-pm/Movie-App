// angular
//   .module('movieApp')
//   .controller('SearchController', ['$scope', '$location', SearchController]);
//
//   function SearchController($scope, $location) {
//
//     $scope.search = function() {
//       if ($scope.query)
//         $location.path('/results').search('q', $scope.query);
//     };
//   }

// ctrl as
// angular.module('movieApp', [])
//   .controller('SearchController', ['$location', SearchController]);
//
//   function SearchController($location) {
//
//     this.search = function(query) {
//       if (this.query)
//         $location.path('/results').search('q', this.query);
//     };
//   }

angular
  .module('movieApp')
  .controller('SearchController', ['$scope', '$location', '$timeout', SearchController]);

  function SearchController($scope, $location, $timeout) {
    var timeout;
    $scope.keyup = function() {
      timeout = $timeout($scope.search, 1000);
    }

    $scope.keydown = function() {
      $timeout.cancel(timeout);
    }

    $scope.search = function() {
      $timeout.cancel(timeout);

      if ($scope.query)
        $location.path('/results').search('q', $scope.query);
    };
  }
