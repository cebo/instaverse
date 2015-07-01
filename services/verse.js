(function() {

  var app = angular.module('Instagram')

        app.controller('VerseCtrl', function($scope,API) {

              API.getVerseFeed().success(function(data) {
                $scope.verses = data;
              });

          });


        app.controller('SingleVerseCtrl', function($scope, $location, API) {


            var verseId = $location.path().split('/').pop();

              API.getVerseByID(verseId).success(function(data) {
                $scope.verses = data;
              });

          });

 })();
