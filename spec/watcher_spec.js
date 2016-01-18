angular
  .module('search', [])
  .directive('searchControl', function() {
    return {
      replace: true,
      scope: false,
      template: '<input type="search" placeholder="{{placeholder}}" value="{{query}}">'
    }
  });



describe('Count Watchers', function() {
  var $rootScope, $compile;

  beforeEach(module('search'));

  beforeEach(inject(function(_$compile_, _$rootScope_) {
    $rootScope = _$rootScope_;
    $compile = _$compile_;
  }))

  it('redners the directive', function() {
    var expectedHtml = '<input type="search" placeholder="search ..." value="star wars" class="ng-scope">'
    var element = $compile("<search-control></search-control>")($rootScope);

    $rootScope.placeholder = "search ...";
    $rootScope.query = "star wars";
    $rootScope.$digest();
    expect(element[0].outerHTML).toBe(expectedHtml);

    dump('scopes', $rootScope.$countChildScopes());
    dump('watchers', $rootScope.$countWatchers());

  });
});
