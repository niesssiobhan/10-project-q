'use strict';

const Q = require('./lib/subscriber.js');

const db = new Q('database'); //constructor

db.subscribe('delete', (payload) => { //methods 
  console.log('delete happened', payload);
});

db.subscribe('create', (payload) => {
  console.log('create happened', payload);
});

console.log(db.subscriptions());




// const io = require('./lib/subscribe.js');

// const db = constructor('database');

// db.subscribe('delete', (payload) => {
//   console.log('has been deleted', payload);
// });

// db.subscribe('create', (payload) => {
//   console.log('has been created', payload);
// });