'use strict';

const io = require('socket.io')(3000);

io.on('connection', (socket) => {
  socket.on('hello', (payload) => {
    soocket.emit('greet', payload);
  });
});