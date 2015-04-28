'use strict';

module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-mocha-test');

  grunt.initConfig({
    watch: {
      gruntfile: {
        src: ['Gruntfile.js'],
        task: ['jshint:gruntfile']
      },
      dev: {
        src: ['lib/**/*.js'],
        task: ['jshint:dev']
      },
      test: {
        src: ['test/**/*.js'],
        task: ['jshint:test', 'mochaTest']
      },
      all: {
        src: ['**/*.js', '!node_modules/'],
        task: ['jshint:all'],
        options: {
          spawn: false
        }
      }
    },
    jshint: {
      gruntfile: {
        src: ['Gruntfile.js']
      },
      dev: {
        src: ['lib/**/*.js']
      },
      test: {
        src: ['test/**/*.js']
      },
      all: {
        src: ['**/*.js', '!node_modules/']
      },
      options: {
        jshintrc: '.jshintrc'
      }
    },
    mochaTest: {
      options: {
        quite: false
      },
      files: ['test/**/*.js']
    }
  });

  grunt.registerTask('hint', ['jshint:all']);
  grunt.registerTask('test', ['hint', 'mochaTest']);
  grunt.registerTask('default', ['jshint:all', 'mochaTest', 'watch:all']);

  grunt.event.on('default', function( action, filepath) {
    grunt.config('jshint.all.src', filepath );
  });
};
