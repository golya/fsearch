'use strict';

/* App Module */
var FlickrSearch = angular.module('FlickrSearch', ['ng', 'ngResource']);

FlickrSearch.factory('flickrPhotos', function ($resource) {
    return $resource('http://api.flickr.com/services/feeds/photos_public.gne', { format: 'json', jsoncallback: 'JSON_CALLBACK' }, { 'load': { 'method': 'JSONP' } });
});