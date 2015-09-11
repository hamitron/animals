'use strict';
var test = require('ava');
var animals = require('./');

test('returns a random animal and a random adjective', function (t) {
	t.assert(animals().length > 0);
});

test('returns all the animals', function (t) {
	t.assert(Array.isArray(animals.words));
	t.assert(animals.words[3].length > 0);
});
