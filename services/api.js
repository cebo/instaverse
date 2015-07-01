angular.module('Instagram')
    .factory('API', function($http) {

      return {
        getFeed: function() {
          return $http.get('https://instaverse-app-server.herokuapp.com/api/feed');
        },

         getVerseByID: function(id) {
          return $http.get('https://instaverse-app-server.herokuapp.com/api/verses/' + id);
        },

         getVerseFeed: function() {
          return $http.get('https://instaverse-app-server.herokuapp.com/api/verses');
        },
        getMediaById: function(id) {
          return $http.get('https://instaverse-app-server.herokuapp.com/api/media/' + id);
        },
        likeMedia: function(id) {
          return $http.post('https://instaverse-app-server.herokuapp.com/api/like', { mediaId: id });
        }
      }

    });