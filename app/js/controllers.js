'use strict';

/* Controllers */

FlickrSearch.controller('PhotoCtrl', function ($scope, flickrPhotos) {
    //$scope.photos = flickrPhotos.load({ tags: "dogs" })
    $scope.search = function() {
        $scope.photos = flickrPhotos.load({ tags: $scope.keywords })
    }
});