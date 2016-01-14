angular
  .module('movieApp')
  .controller('SearchController', ['$scope', '$location', SearchController]);

  function SearchController($scope, $location) {

    $scope.search = function(query) {
      if ($scope.query)
        $location.path('/results').search('q', $scope.query);
    };
  }

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
