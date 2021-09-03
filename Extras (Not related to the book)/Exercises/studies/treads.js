
//Thread
let worker = new Worker('worker.js');
worker.postMessage('Hello');

addEventListener('message');


const {spawn} = require('child_process')

spawn()