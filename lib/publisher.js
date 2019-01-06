'use strict';

const io = require('socket.io');

class Q {
  constructor(queue) {
    this.queue = queue;
    this.namespace = io.of(`/${queue}`);
  }

  

}