'use strict';

describe('MovieCore', function() {
  var PopularMovies;
  var $httpBackend;

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
    var starWars;

    // var expectedData = function(data) {
    //   dump(angular.mock.dump(data));
    //   return angular.fromJson(data).movieId === 'tt0076759';
    // };
    var expectedData = {"movieId":"tt0076759","description": "Epic movie!"};

    $httpBackend.expect('POST', /./, expectedData)
      .respond(201);

    starWars = new PopularMovies({
      movieId: 'tt0076759',
      description: 'Epic movie!'
    });

    starWars.$save();

    // PopularMovies.save({
    //   movieId: 'tt0076759',
    //   description: 'Epic movie!'
    // });

    expect($httpBackend.flush).not.toThrow();
  });

});
