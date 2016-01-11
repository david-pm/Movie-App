'use strict';

describe('MovieCore', function() {
  var PopularMovies, $httpBackend, starWars, expectedData;

  beforeEach(module('movieCore'));

  beforeEach(inject(function(_PopularMovies_, _$httpBackend_) {
    PopularMovies = _PopularMovies_;
    $httpBackend = _$httpBackend_;
  }));

  afterEach(function() {
    // throws an error if an unexpected request is made to $httpBackend
    $httpBackend.verifyNoOutstandingExpectation();
  });

  it('creates a popular movie', function() {
    expectedData = function(data) {
      dump(angular.mock.dump(data));
      return angular.fromJson(data).movieId === 'tt0076759';
    };
    // var expectedData = {"movieId":"tt0076759","description": "Epic movie!"};

    $httpBackend.expect('POST', /./, expectedData)
      .respond(201);

    starWars = new PopularMovies({
      movieId: 'tt0076759',
      description: 'Epic movie!'
    });

    starWars.$save();

    expect($httpBackend.flush).not.toThrow();
  });

  it('gets a movie', function() {
    $httpBackend.expect('GET', 'popular/tt0076759')
      .respond(200);

    PopularMovies.get({ movieId: 'tt0076759' });

    expect($httpBackend.flush).not.toThrow();
  });

  it('updates a movie', function() {
    expectedData = function(data) {
      dump(angular.mock.dump(data));
      return angular.fromJson(data).description === 'AMAZING movie!';
    };

    $httpBackend.expect('PUT', 'popular', expectedData)
      .respond(201);

    starWars = new PopularMovies({
      movieId: 'tt0076759',
      description: 'AMAZING movie!'
    });
    starWars.$update();

    expect($httpBackend.flush).not.toThrow();
  });

});
