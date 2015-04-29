#!/usr/bin/env node

'use strict';

var Greeting = require('./greeting');

var greetingCli = module.exports = function( args ) {

  if ( process.argv[2] === '--help' ) {
    console.log('GREETING.JS, by Joseph Thies');
    console.log('============================');
    console.log('OPTIONS:');
    console.log('   --help:       Read this menu.');
    console.log('');
    console.log('----------------------------');
  }

  var name = process.argv[2],
      lang = process.argv[3];

  var greeting = new Greeting();

  return greeting.greet( args[2], args[3] );

};

console.log(greetingCli(process.argv));
