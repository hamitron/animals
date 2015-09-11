'use strict';
var words = require('./words.json');
var adj = require('./adjectives.json');
var uniqueRandom = require('unique-random')(0, words.length - 1);
var uniqueRandomAdj = require('unique-random')(0, adj.length - 1)

function capitalizeFirstLetter(string){
	return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = function () {
	return capitalizeFirstLetter(adj[uniqueRandomAdj()]) + " " + capitalizeFirstLetter(words[uniqueRandom()]);
};

module.exports.words = words;
