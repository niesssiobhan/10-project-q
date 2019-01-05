'use strict';

const io = require('socket.io'); //possibly -client?

// constructor to make queue (db)
class Q {
  constructor(namespace){
    this.namespace = namespace;
    // a connection will go here? (emit)
  }

}
// const db = io.of('/db');

// create method for queue (for example subsrcibe)

// create events('delete', and 'create')

// in the corresposnding file: db = queue, subscribe = method, delete = event