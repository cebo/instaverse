(function() {

  var app = angular.module('Instagram')

app.controller("index", ["$scope", function ($scope) {
  $scope.search;

  var tag = $scope.search;
  var loadButton = document.getElementById('load-more');

  function loadInstagram(tagName){
    var feed = new Instafeed({
                get: 'tagged',
                tagName: tagName,
                accessToken: '6678174.467ede5.205a03ebc4b74d4082823781c3149575',
                target: 'instafeed',
                sortBy: 'most-recent',
                limit: 33,
                resolution: 'standard_resolution',
      template: '<a title="{{caption}}" class="fancybox" rel="group" href="{{image}}"><img src="{{image}}" title="{{caption}}" /><div id="filter">{{model.filter}}</div><div class="info"><p class="location" ng-model="location"><i class="icon-location"></i>{{location}}</p><p class="user"><i class="icon-user"></i>@{{model.user.username}}</p><p><i class="icon-comment"></i>{{caption}}</p><br><ul><li class="icon-heart">{{likes}} likes<li class="icon-chat">{{comments}} comments</ul></div></a>',
      after: function() {
        if (!this.hasNext()) {
          loadButton.setAttribute('disabled', 'disabled');
        }
      }
    }).run();
  };

  loadInstagram("vsco");

  function clearFeed(){
    document.getElementById('instafeed').innerHTML = "";
  }

  // Empty instafeed element and reload with relevant tag
  $scope.searchTag = function(){
        clearFeed();
        tag = $scope.search;
        loadInstagram(tag);
  };

  $scope.clear = function(){
        $scope.search = '';
       document.getElementById('search').focus();
  };

  instaSearch.directive('ngEnter', function () {
    return function ($scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                $scope.searchTag();
                event.preventDefault();
             }
         });
     };
  });
}]);
