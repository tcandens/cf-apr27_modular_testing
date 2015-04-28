'use strict';

var expect = require('chai').expect;
var Greeting = require('../lib/greeting');

describe('greeting.js', function() {
  var greeting;
  before(function() {
    greeting = new Greeting();
  });
  it('Should return a string with default English greeting', function() {
    expect(greeting.greet('Mua\'dib')).to.eql('Hello, Mua\'dib!');
  });
  it('Should return a string with Spanish greeting', function() {
    expect(greeting.greet('Stilgar', 'es')).to.eql('Bienvenido, Stilgar!');
  });

});
