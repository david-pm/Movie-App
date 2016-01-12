'use strict';

describe('MovieCore', function() {
  var PopularMovies, $httpBackend, starWars, expectedData, expectedHeaders;

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
    // var expectedData = {"movieId":"tt0076759","description": "Epic movie!"};
    expectedData = /{"movieId":"tt0076759","description":(.*)}/;

    $httpBackend.expect('POST', /./, expectedData)
      .respond(201);

    starWars = new PopularMovies({
      movieId: 'tt0076759',
      description: 'Good times'
    });

    starWars.$save();

    expect($httpBackend.flush).not.toThrow();
  });

  it('gets a movie', function() {
    $httpBackend.expect('GET', function(url) {
      dump(url);
      return url === 'popular/tt0076759';
    }).respond(200);
    // $httpBackend.expect('GET', 'popular/tt0076759').respond(200);

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

  it('authenticates requests', function() {
    expectedHeaders = {"authToken":"mylittlepony","Accept":"application/json, text/plain, */*"};

    // $httpBackend.expectGET('popular/tt0076759', function(headers) {
    $httpBackend.expect('GET', 'popular/tt0076759', null, function(headers) {
      dump(headers);
      return angular.fromJson(headers).authToken  === headers.authToken;
    }).respond(200);

    PopularMovies.get({ movieId: 'tt0076759' });
    $httpBackend.flush();
  });

  xit('authenticates requests', function() {
    var headerData = function(headers) {
        return headers.authToken === 'mylittlepony';
    }
    var matchAny = /.*/;
    var popularMovie = {movieId: 'tt0076759',description: 'AMAZING movie!'};

    $httpBackend.whenGET(matchAny, headerData)
      .respond(200);
    $httpBackend.expectPOST(matchAny, matchAny, headerData)
      .respond(200);
    $httpBackend.expectPUT(matchAny, matchAny, headerData)
      .respond(200);
    $httpBackend.expectDELETE(matchAny, headerData)
      .respond(200);

    PopularMovies.query();
    PopularMovies.get({ movieId: 'tt0076759' });
    new PopularMovies(popularMovie).$save();
    new PopularMovies(popularMovie).$update();
    new PopularMovies(popularMovie).$remove();

    expect($httpBackend.flush).not.toThrow();
  });

});
