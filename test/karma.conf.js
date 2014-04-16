module.exports = function(config){
    config.set({
	basePath : '../',
	files : [
	    'bower_components/angular/angular.js',
	    'bower_components/angular-resource/angular-resource.js',
	    'bower_components/angular-mocks/angular-mocks.js',
	    'app/js/*.js',
	    'test/unit/**/*.js'
	],
	exclude: ['bower_components/angular/angular-loader*.js'],
	autoWatch : true,
	frameworks: ['jasmine'],
	browsers : ['Firefox'],
	plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine'
        ],
	junitReporter : {
	    outputFile: 'test_out/unit.xml',
	    suite: 'unit'
	}

    });
};
