const { test } = require('node:test');
const addFive = require('./addFive');
const { hasUncaughtExceptionCaptureCallback } = require('process');


// Figure out the testing method and what is going wrong 
 
test('returns the number plus 5', () => {
    hasUncaughtExceptionCaptureCallback
}