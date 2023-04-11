const { test } = require('node:test');
const addFive = require('./addFive');
const { hasUncaughtExceptionCaptureCallback } = require('process');

test('returns the number plus 5', () => {
    hasUncaughtExceptionCaptureCallback
}