'use strict';

angular
  .module('movieCore', ['ngResource'])
  .factory('PopularMovies', ['$resource', PopularMovies]); // min safe

  function PopularMovies($resource) {
    return $resource('popular/:movieId', { movieId: '@id' }, {
      update: { method: 'PUT' },
      save: { method: 'POST' }
    });
  }
