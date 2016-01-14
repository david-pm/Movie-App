'use strict';

angular
  .module('omdb', [])
  .factory('omdbApi', ['$http', '$q', omdbApi]); // min safe

  function omdbApi($http, $q) {
    var service = {},
        baseUrl = 'http://www.omdbapi.com/?v=1&';

    service.search = function(query) {
      var deferred = $q.defer();
      $http({
        method: 'get',
        url: baseUrl + 's=' + encodeURIComponent(query)
      })
      .then(function(response) {
        deferred.resolve(response.data);
      })
      .catch(function(response) {
        deferred.reject('Error finding movie. (HTTP status: ' + response.status + ')')
      });

      return deferred.promise;
    };

    service.find = function(id) {
      var deferred = $q.defer();
      $http({
        method: 'get',
        url: baseUrl + 'i=' + id
      })
      .then(function(response) {
        deferred.resolve(response.data);
      })
      .catch(function(response) {
        deferred.reject('Error finding movie by ID. (HTTP status: ' + response.status + ')')
      });

      return deferred.promise;
    };

    return service;
  }
