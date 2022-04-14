const EventEmitter = require('events'); // Import EventEmitter

const customEmitter = new EventEmitter(); // Create a new instance of EventEmitter

// Listen for the 'response' event 'response' is name of emitted event
customEmitter.on('response', () => {
    console.log(`Data received `);
}) 

customEmitter.on('response', (data) => {
    console.log(`Data received: ${data}`);
})


customEmitter.on('response', (data, id) => {
    console.log(`Data received: ${data} id : ${id}`);
})

customEmitter.on('test', () => {
    console.log('test event fired');
})

customEmitter.emit('response', 'Hello World', 42);
// customEmitter.emit('test');

