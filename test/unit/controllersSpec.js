describe('controllers', function() {
    beforeEach(module('FlickrSearch'));

    var mockService = {
	photos: ['photo1', 'photo2'],
	load: function() {
	    return this.photos;
	}	
    };
    
    it('should return photos array with two elements after search',
       inject(function($rootScope, $controller) {
	   var scope = $rootScope.$new();
	   var ctrl = $controller('PhotoCtrl', {$scope: scope, flickrPhotos:mockService});
	   scope.search();
	   expect(scope.photos.length).toBe(2); 
       })
      );
});