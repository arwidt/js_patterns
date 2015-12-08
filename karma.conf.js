'use strict';

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'common_js'],
    files: [
        'src/**/!(*.test).js',
        'src/**/*.test.js',
        'src/**/*.html'
    ],
    preprocessors: {
        'src/**/!(*.test).js': ['common_js'],
        'src/**/*.test.js': ['common_js'],
        'src/**/*.html': ['common_js']
    },
    common_js: {
        transforms: {
            'html-browserify': true
        },
        autoRequire: [
            '**/src/**/*.test.js'
        ]
    },
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    browserDisconnectTimeout: 20000,
    browserNoActivityTimeout: 20000
  });
};
