'use strict';

var Greeting = require('./greeting');

var name = process.argv[2],
    lang = process.argv[3];

var greeting = new Greeting();

console.log( greeting.greet( name, lang ) );
