// describe('rootScope', function() {
//   var $rootScope, $scope;
//
//   var menuController = function($scope) {
//     $scope.items = ['Beverages', 'Condiments'];
//     if ($scope.selected !== undefined) {
//       $scope.message = 'You selected ' + $scope.items[$scope.selected];
//     }
//   };
//
//   beforeEach(inject(function(_$controller_) {
//     $scope = {};
//     $scope.selected = 0;
//     _$controller_(menuController, { $scope: $scope });
//   }))
//
//   it('demo $rootScope', function() {
//     dump($scope);
//     expect($scope.message).toBe('You selected Beverages');
//   });
// });

// describe('rootScope', function() {
//   var $rootScope, $scope;
//
//   var menuController = function($scope) {
//     $scope.items = ['Beverages', 'Condiments'];
//     if ($scope.selected !== undefined) {
//       $scope.message = 'You selected ' + $scope.items[$scope.selected];
//     }
//   };
//
//   beforeEach(inject(function(_$controller_, _$rootScope_) {
//     $rootScope = _$rootScope_;
//     $rootScope.selected = 0;
//     $scope = $rootScope.$new();
//     // $scope = $rootScope.$new();
//     // $scope = $rootScope.$new();
//     _$controller_(menuController, { $scope: $scope });
//   }))
//
//   it('demo $rootScope', function() {
//     dump(angular.mock.dump($rootScope));
//     dump(angular.mock.dump($scope));
//     dump('root', $rootScope.$countChildScopes());
//     dump('child', $scope.$countChildScopes());
//     expect($scope.message).toBe('You selected Beverages');
//   });
// });

describe('rootScope', function() {
  var $rootScope, $scope;

  var menuController = function($scope) {
    $scope.items = ['Beverages', 'Condiments'];
    // listen for events
    $scope.$on('selected', function() {
      $scope.message = 'You selected ' + $scope.items[$scope.selected];
    });
  };

  beforeEach(inject(function(_$controller_, _$rootScope_) {
    $rootScope = _$rootScope_;
    $rootScope.selected = 0;
    $scope = $rootScope.$new();
    _$controller_(menuController, { $scope: $scope });
  }))

  it('demo $rootScope', function() {
    // ngMocks $rootScope gives us access to typical methods like $emit
    $scope.$emit('selected');
    expect($scope.message).toBe('You selected Beverages');
  });
});
