describe('Movie Result Directive', function() {

  var result = {
    "Title":"Star Wars: Episode IV - A New Hope",
    "Released":"25 May 1977",
    "Genre":"Action, Adventure, Fantasy",
    "Director":"George Lucas",
    "Plot":"Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a wookiee and two droids to save the universe from the Empire's world-destroying battle-station, while also attempting to rescue Princess Leia from the evil Darth Vader.",
    "Actors":"Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing",
    "Poster":"http://ia.media-imdb.com/images/M/MV5BMTU4NTczODkwM15BMl5BanBnXkFtZTcwMzEyMTIyMw@@._V1_SX300.jpg",
  };

  var expectedHtml = [
      '<div class="col-sm-4">',
        '<img ng-src="http://ia.media-imdb.com/images/M/MV5BMTU4NTczODkwM15BMl5BanBnXkFtZTcwMzEyMTIyMw@@._V1_SX300.jpg" alt="Star Wars: Episode IV - A New Hope" width="220" src="http://ia.media-imdb.com/images/M/MV5BMTU4NTczODkwM15BMl5BanBnXkFtZTcwMzEyMTIyMw@@._V1_SX300.jpg">',
      '</div>',
      '<div class="col-sm-8">',
        '<h3 class="ng-binding">Star Wars: Episode IV - A New Hope</h3>',
        '<p class="ng-binding"><strong>Plot:</strong> Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a wookiee and two droids to save the universe from the Empire\'s world-destroying battle-station, while also attempting to rescue Princess Leia from the evil Darth Vader.</p>',
        '<p class="ng-binding"><strong>Director:</strong> George Lucas</p>',
        '<p class="ng-binding"><strong>Actors:</strong> Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing</p>',
        '<p class="ng-binding"><strong>Released:</strong> 25 May 1977</p>',
        '<p class="ng-binding"><strong>Genre:</strong> Action, Adventure, Fantasy</p>',
      '</div>',
  ].join('');
  var $compile, $rootScope;

  beforeEach(module('movieApp'));
  beforeEach(inject(function(_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  it('outputs movie results to HTML', function() {
    var element;
    $rootScope.result = result; // set our data to the scope, which we pass into the $compile service
    element = $compile('<movie-result result="result"></movie-result>')($rootScope);
    $rootScope.$digest();
    expect(element.html()).toBe(expectedHtml);
  });

});
