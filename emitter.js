const EventEmitter = require('events');

// class MyEmitter extends EventEmitter {}

// const myEmitter = new MyEmitter();
// myEmitter.on('event', () => {
//   console.log('an event occurred!');
// });
// myEmitter.emit('event');

const myEmitter = new EventEmitter();
myEmitter.on('waterfall', () => {
  console.log('Water is falling. Turn off the pump!');
  setTimeout(()=>{
    console.log('Reminder! Dubara na kehna pare. Water is falling. Turn off the pump!');
  }, 3000);
});

console.log('Mom doing work...');
console.log('Mom saw water falling...');
console.log('Mom call emitter...');
myEmitter.emit('waterfall');
console.log('Mom still doing other work...');
console.log('Mom still doing other work...');
