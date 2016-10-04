let SuperPromise = require('./lib/SuperPromise');
let testPromise = require('./lib/testPromise');

let runner = process.env.NODE_RUNNER;

testPromise[runner](SuperPromise);
