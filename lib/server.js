'use strict';

const io = require('socket.io')(3000);
// const Q = require('./subscriber.js');

// io.on('Subscribe', room);
// io.join(room);

class Q {
  constructor(queue) {
    this.queue = queue;
    this.namespace = io.of(`/${queue}`);
    // console.log('????', io);
    // console.log('!!!!!',this.namespace);  
    this.namespace.on('connection', this.connect.bind(this));
  }

  static start() {
    // io.on('connection', (io) => {
    //   io.on('welcome', (payload) => {
    //     io.emit('greet', payload);
    //   });
    // })
  }

  static close() {
    io.close();
    console.log('the server has been closed');
  }

  connect(socket) {
    console.log(`connected to ${this.queue}`, socket.id);
  // socket.on('connection', (socket) => {
    // });
  }

  // monitorEvent(room)

}

module.exports = Q;