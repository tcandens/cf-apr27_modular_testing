'use strict';

module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-mocha-test');

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      files: ['test/*.js', 'lib/*.js']
    },
    mochaTest: {
      options: {
        quite: false
      },
      src: ['test/**/*.js']
    }
  });
  // grunt.registerTask('default', []);
  grunt.registerTask('test', ['mochaTest']);
  grunt.registerTask('lint', ['jshint'])
}
