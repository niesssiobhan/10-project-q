'use strict';

const io = require('socket.io-client');

// constructor to make queue (db)
class Q {
  constructor(queue) {
    this.queue = queue;
    this.connect = io.connect(`http://localhost:3000/${queue}`);
  }

  //subscribe method
  subscribe(client, cb){
    // this.connect.emit('Subscribe', emit);
  }



}

module.exports = Q;