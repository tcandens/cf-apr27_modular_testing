#!/usr/bin/env nodejs

'use strict';

var Greeting = require('./greeting');

if ( process.argv[2] === '--help' ) {
  console.log('GREETING.JS, by Joseph Thies');
  console.log('============================');
  console.log('OPTIONS:');
  console.log('   --help:       Read this menu.');
  console.log('');
}

var name = process.argv[2],
    lang = process.argv[3];

var greeting = new Greeting();

console.log( greeting.greet( name, lang ) );
