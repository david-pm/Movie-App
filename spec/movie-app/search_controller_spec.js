/* BRAINSTORM - get a sense of what you want to code */
// describe('Search Ctrl', function() {
//   var $scope, $location;
//
//   beforeEach(function() {
//     $location = {
//       url: ''
//     };
//     $scope = {};
//     $scope.search = function(query) {
//       if ($scope.query)
//         $location.url = '/results?q=star&20wars';
//     };
//   });
//
//   it('redirect to the query results page for a non-empty query', function() {
//     $scope.query = 'star wars';
//     $scope.search();
//     expect($location.url).toBe('/results?q=star%20wars');
//   });
//
//   it('does NOT redirect to the query results page for an empty query', function() {
//     $scope.query = '';
//     $scope.search();
//     expect($location.url).not.toBe('/results?q=star%20wars');
//   });
// });

/* BRAINSTORM (part 2) - with $controller inline injectable functions */
// describe('Search Ctrl', function() {
//   var $scope, $location;
//
//   beforeEach(inject(function(_$controller_, _$location_) {
//     $location = _$location_;
//     $scope = {};
//     // create an injectable function for prototyping
//     var fn = function($scope) {
//       $scope.search = function(query) {
//         if ($scope.query)
//           $location.path('/results').search('q', $scope.query);
//       };
//     };
//     _$controller_(fn, { $scope: $scope, $location: $location })
//   }));
//
//   it('redirect to the query results page for a non-empty query', function() {
//     $scope.query = 'star wars';
//     $scope.search();
//     expect($location.url()).toBe('/results?q=star%20wars');
//   });
//
//   it('does NOT redirect to the query results page for an empty query', function() {
//     $scope.query = '';
//     $scope.search();
//     expect($location.url()).toBe('');
//   });
// });

/* INTEGRATE - with app */
// describe('Search Ctrl', function() {
//   var $scope, $location;
//
//   beforeEach(module('movieApp'));
//   beforeEach(inject(function(_$controller_, _$location_, $rootScope) {
//     $location = _$location_;
//     $scope = $rootScope.$new();
//     _$controller_('SearchController', { $scope: $scope });
//   }));
//
//   it('redirect to the query results page for a non-empty query', function() {
//     $scope.query = 'star wars';
//     $scope.search();
//     expect($location.url()).toBe('/results?q=star%20wars');
//   });
//
//   it('does NOT redirect to the query results page for an empty query', function() {
//     $scope.query = '';
//     $scope.search();
//     expect($location.url()).toBe('');
//   });
// });

/* THIS - binding */
// describe('Search Ctrl', function() {
//   var $this, $location, $controller;
//
//   beforeEach(module('movieApp'));
//   beforeEach(inject(function(_$controller_, _$location_) {
//     $location = _$location_;
//     $controller = _$controller_;
//   }));
//
//   it('redirect to the query results page for a non-empty query', function() {
//     $this = $controller('SearchController', { $location: $location }, { query: 'star wars' });
//     $this.search();
//     expect($location.url()).toBe('/results?q=star%20wars');
//   });
//
//   it('does NOT redirect to the query results page for an empty query', function() {
//     $this = $controller('SearchController', { $location: $location }, { query: '' });
//     $this.search();
//     expect($location.url()).toBe('');
//   });
// });


describe('Search Ctrl', function() {
  var $scope, $location, $timeout;

  beforeEach(module('movieApp'));
  beforeEach(inject(function(_$controller_, _$location_, _$timeout_, $rootScope) {
    $scope = $rootScope.$new();
    $location = _$location_;
    $timeout = _$timeout_;
    _$controller_('SearchController', { $scope: $scope });
  }));

  it('redirect to the query results page for a non-empty query', function() {
    $scope.query = 'star wars';
    $scope.search();
    expect($location.url()).toBe('/results?q=star%20wars');
  });

  it('does NOT redirect to the query results page for an empty query', function() {
    $scope.query = '';
    $scope.search();
    expect($location.url()).toBe('');
  });

  it('searches after one second of inactivity', function() {
    $scope.query = 'star wars';
    $scope.keyup();
    $timeout.flush();
    expect($timeout.verifyNoPendingTasks).not.toThrow();
    expect($location.url()).toBe('/results?q=star%20wars');
  });

  it('cancels timeout on keydown', function() {
    $scope.query = 'star wars';
    $scope.keyup();
    $scope.keydown();
    expect($timeout.verifyNoPendingTasks).not.toThrow();
  });

  it('cancels timeout on search', function() {
    $scope.query = 'star wars';
    $scope.keyup();
    $scope.search();
    expect($timeout.verifyNoPendingTasks).not.toThrow();
  });

});
