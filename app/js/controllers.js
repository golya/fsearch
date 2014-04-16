'use strict';

/* Controllers */

FlickrSearch.controller('PhotoCtrl', function ($scope, flickrPhotos) {
    $scope.search = function() {
        $scope.photos = flickrPhotos.load({ tags: $scope.keywords })
    }
});