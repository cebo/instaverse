(function() {

  var app = angular.module('Instagram')

    app.controller('DetailCtrl', function($scope, $rootScope, $location, API, Verse,$auth, $routeParams) {

    var mediaId = $location.path().split('/').pop();

    API.getMediaById(mediaId).success(function(media) {
      $scope.photo = media;
      $scope.hasLiked = media.user_has_liked;


      $scope.newVerse = {

            author: $scope.currentUser.username,
            authorlink: 'http://instagram.com/' + $scope.currentUser.username,
            versephoto: $scope.photo.images.standard_resolution.url,
            photoauthor:  $scope.photo.user.username,
            photoauthorlink:  'http://instagram.com/' + $scope.photo.user.username,
            draft: true
      }

    });

    $scope.like = function() {
      $scope.hasLiked = true;
      API.likeMedia(mediaId).error(function(data) {
        sweetAlert('Error', data.message, 'error');
      });
    };


      // get all verses
 Verse.query().$promise.then(function (verses) {
    $scope.verses = verses;
  });


   // set form blank
  $scope.newVerse = {};

  // post to verses
  $scope.addVerse = function () {
    var verse = new Verse($scope.newVerse); // in order to do this, field names must match exactly on the form
                                            // and on the database. otherwise, use an object literal and manually
                                            // enter the field names
    // this sends a POST request
    verse.$save();

    // the last step is updating the view to add the verse
    // to the stack, but how that is done depends a lot on
    // architecture I'm unaware of. It could be as simple as:
    $scope.verses.push($scope.newVerse);

    // reset form
    $scope.newVerse = {};

    // the biggest thing missing from this example is error handling.
  };


  });

 })();