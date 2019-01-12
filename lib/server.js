'use strict';

const Server = require('socket.io');

class Queue {
  constructor(q) {
    this.name = q;
    this.events = new Set();
    this.q = Queue.io.of(`/${q}`);
    this.queue.on('connection', socket => {
      socket.on('subscribe', (event, callback) => {
        if(this.events.has(event)) {
        socket.join(event);
        callback && callback(undefined, `subscribed to ${event} in ${this.name}`);
        }
      });
    });
  }

  monitorEvent(event) {
    this.events.add(event);
  }

  static start() {
    const PORT = process.env.Q_SERVER || 3333;
    Queue.io = new IO (PORT);  
    Queue.io.on('connection', socket => {
      socket.on('publish', message => {
        let {queue, event, payload} = message;
        Queue.io.of(queue).to(event).emit('trigger', payload);
      });
    });
  }
}

module.exports = Queue;