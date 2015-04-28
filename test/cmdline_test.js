'use strict';

var expect = require('chai').expect;
var cmdline = require('../lib/cmdline')

describe('cmdline.js', function() {
  describe('Easy way', function() {
    it('Should use mock parameters and output greeting.', function() {
      expect(cmdline(['x','x', 'Ford', 'en'])).to.eql('Hello, Ford!');
    });
  });

  describe('The Hard Way', function() {
    var argvCache; // Override global process.argv
    before(function() {
      argvCache = process.argv;
      process.argv = ['', '', 'Arthur', 'en'];
    });

    after(function() {
      process.argv = argvCache;
    });

    it('Should use actual process.argv and output greeting', function() {
      expect(cmdline(process.argv)).to.eql('Hello, Arthur!');
    });
  })
});
