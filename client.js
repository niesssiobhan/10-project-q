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
