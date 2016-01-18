angular
  .module('movieApp', ['ui.bootstrap', 'ngRoute', 'omdb', 'movieCore'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'movie-app/home.html',
        controller: 'HomeController'
      })
      .when('/results', {
        templateUrl: 'movie-app/results.html',
        controller: 'ResultsController'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(function($logProvider) {
    $logProvider.debugEnabled(false); // can override this in specs
  });

// angular
//   .module('movieApp', ['ui.bootstrap', 'ngRoute', 'omdb', 'movieCore', 'ngMockE2E'])
//   .config(function($routeProvider) {
//     $routeProvider
//       .when('/', {
//         templateUrl: 'movie-app/home.html',
//         controller: 'HomeController'
//       })
//       .when('/results', {
//         templateUrl: 'movie-app/results.html',
//         controller: 'ResultsController'
//       })
//       .otherwise({
//         redirectTo: '/'
//       });
//   })
//   .config(function($logProvider) {
//     $logProvider.debugEnabled(false); // can override this in specs
//   })
//   .run(function($httpBackend) {
//     var data = ["tt0076759", "tt0080684", "tt0086190"],
//         headers = {
//           headers: {'Content-Type': 'application/json'}
//         };
//     $httpBackend.whenGET(function(s) {
//       return (s.indexOf('popular') !== -1);
//     }).respond(200, data, headers);
//
//     // allow all other requests to run
//     $httpBackend.whenGET(/.*/).passThrough();
//   });
