'use strict';

const Connection = require('../lib/subscriber.js');
const databaseQueue = new Connection('database');

databaseQueue.subscribe('delete', (payload) => {
  console.log('DELETE', payload);
});

databaseQueue.subscribe('create', (payload) => {
  console.log('CREATE', payload);
});

const networkQueue = new Connection('network');

networkQueue.subscribe('attack', (payload) => {
  console.log('run!', payload);
});