'use strict';

// Unify module variables to avoid clobbering and monkeypatching
var Greet = module.exports = exports = function() {};

Greet.prototype.greet = function( name , lang ) {
  var greeting = 'Hello, ';
  if ( lang ) { // if option is set
    switch ( lang ) {
      case 'en':
        greeting = 'Hello, ';
        break;
      case 'es':
        greeting = 'Bienvenido, ';
        break;
      case 'de':
        greeting = 'Guten Tag, ';
        break;
      case 'fr':
        greeting = 'Bienvenue, ';
        break;
      case 'it':
        greeting = 'Ciao, ';
        break;
      case 'ch':
        greeting = 'Ni Hao, ';
        break;
      case 'jp':
        greeting = 'Konnichiwa, ';
        break;
    }
  }

  var string = greeting + name + '!';
  return string;

};
