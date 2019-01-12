'use strict';

const io = require('socket.io-client');

const SERVER = 'http://localhost:3333';

class ClientConnector {
  constructor(q) {
    this.q = q;
    this.sockets = [];
  }
  subscribe(event, callback) {
    const socket = io.connect(`${SERVER}/${this.q}`);
    socket.emit('subscribe', event, (err, status) => {
      if(err) {console.error(err);}
      else {console.log(status);}
    });
    socket.on('trigger', callback)
  }

}

module.exports = ClientConnector;