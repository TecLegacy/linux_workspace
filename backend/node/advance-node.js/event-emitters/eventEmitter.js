const { EventEmitter } = require('events');

const myEE = new EventEmitter();
const ev = new EventEmitter();

// Prints:
//   b  ->  prependListener
//   a ->  then emit is run
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');

ev.on('greet', () => {
  console.log('welcome');
});
ev.on('greet', () => {
  console.log('welcome');
});
ev.on('greet', (name = 'yolo') => {
  console.log('welcome' + name);
});

/**
 * { [greet:()={},greet:()={},greet:()={}] }
 */
// ev is an object and we are adding property on it
// same property names are grouped into an Array like greet in above example
ev.emit('greet');
ev.emit('greet', 'cool');

// Run Only once
// This will be remove from emitter object
// After running for once
/**
 * Prints  ->  Bye bye
 */
ev.once('bye', () => {
  console.log('Bye bye ');
});

// LISTENER IS CALLED ONLY ONCE
ev.emit('bye');
ev.emit('bye'); // this will not emit
ev.emit('bye'); // this will not emit
