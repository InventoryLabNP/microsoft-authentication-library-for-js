var webpackConfig = require('./webpack.config');

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine-ajax', 'jasmine'],
    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      'tests/**/*.ts',
    ],
    exclude: [
    ],
    preprocessors: {
      'tests/**/*.ts': ['webpack']
    },
    plugins: [
      'karma-jasmine',
      'karma-jasmine-ajax',
      'karma-webpack' // *** This 'registers' the Karma webpack plugin.
    ],
    webpack: {
      module: webpackConfig.module,
      resolve: webpackConfig.resolve
    },
    reporters: ['progress'],
    port: 8080,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: true,
    concurrency: Infinity
  })
}
