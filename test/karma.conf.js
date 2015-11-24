// Karma configuration
// Generated on Mon Nov 23 2015 14:09:27 GMT-0700 (MST)

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath   : '.',

        // frameworks to use
        frameworks : ['mocha', 'chai'],

        // list of files / patterns to load in the browser
        files: [
            'http://code.jquery.com/jquery-2.1.4.min.js',
            'http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js',
            'http://cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.15/angular.min.js',
            'http://cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.15/angular-route.min.js',
            'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.0-beta.2/angular-mocks.js',
            '../src/**/*.js',
            '../test/**/*.js',
            '../src/**/*.html'
        ],

        // test results reporter to use
        reporters   : ['progress'],

        // web server port
        port        : 9876,

        proxies     : {
        '/'         : 'http://localhost:3000'
        },

        // exclude     : [
        //     '../test/**/*.js'
        // ],

        // enable / disable colors in the output (reporters and logs)
        colors      : true,

        // level of logging
        logLevel    : config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch   : false,

        // start these browsers
        browsers    : ['Chrome'],

        // Continuous Integration mode
        singleRun   : false,

        // Concurrency level
        // how many browser should be started simultanous
        concurrency : Infinity
    })
}
