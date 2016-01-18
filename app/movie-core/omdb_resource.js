'use strict';

angular
  .module('movieCore', ['ngResource'])
  .factory('PopularMovies', ['$resource', PopularMovies]);

  function PopularMovies($resource) {
    var token = 'mylittlepony'; // TBC
    return $resource('popular/:movieId', { movieId: '@id' }, {
      update: {
        method: 'PUT',
        headers: { 'authToken': token }
      },
      query: {
        method: 'GET',
        headers: { 'authToken': token }
      },
      get: {
        method: 'GET',
        isArray: true,
        headers: { 'authToken': token }
      },
      save: {
        method: 'POST',
        headers: { 'authToken': token }
      },
      remove: {
        method: 'DELETE',
        headers: { 'authToken': token }
      }
    });
  }
