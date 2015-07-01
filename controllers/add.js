

angular.module('Instagram')
.controller('VerseCtrl', function (Verse, $scope) {
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