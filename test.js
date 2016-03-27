/**
 * 
 * @authors vvwhehe (wfeng@gmail.com)
 * @date    2016-03-27 10:21:36
 * @version 0.0.1
 */

var leftpad = require('./index');
var test = require('tape');

test('leftpad', function(assert){
	assert.plan(4);
	assert.strictEqual(leftpad('test',6), '  test');
	assert.strictEqual(leftpad('test',6,'hh'), 'hhhhtest');
	assert.strictEqual(leftpad('test',4,'hh'), 'test');
	assert.strictEqual(leftpad(1, 2, 0), '01');
});