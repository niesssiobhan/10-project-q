'use strict';

const io = require('socket.io-client')|(3000);

// constructor to make queue (db)
class Q {
  constructor(queue) {
    this.queue = queue;
    this.connect = io.connect(`http://localhost:3000/${queue}`);
  }

  //subscribe method
  subscribe(client, cb){
    this.connect.emit('Subscribe', emit);
  }

  static start(){
    io.on('connection', (socket) => {
      socket.on('welcome', (payload) => {
        socket.emit('greet', payload);
      });
    });
  }

}

module.exports = Q;