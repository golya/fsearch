describe('flickrSearch app', function() {
    beforeEach(function() {
	browser().navigateTo('../../app/index.html');
    });
 
    var oldCount = -1;
 
    it("entering tag and performing click", function() {
	element('.photo-item').query(function($el, done) {
	    oldCount = $el.children().length;
	    done();
	});
 
	input('keywords').enter('test');
 
	element('.btn').query(function($el, done) {
	    $el.click();
	    done();
	});
    });
 
    it('should add one more element now', function() {
	expect(repeater('div').count()).toBe(oldCount + 1);
    });       
});