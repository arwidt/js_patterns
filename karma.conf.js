'use strict';

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'common_js'],
    files: [
      'commonjs/**/!(*.test).js',
      'commonjs/**/*.test.js',
      'commonjs/**/*.html'
    ],
    preprocessors: {
      'commonjs/**/!(*.test).js': ['common_js'],
      'commonjs/**/*.test.js': ['common_js'],
      'commonjs/**/*.html': ['common_js']
    },
    common_js: {
      transforms: {
        'html-browserify': true
      },
      autoRequire: [
        '**/commonjs/**/*.test.js'
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
