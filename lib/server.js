'use strict';

const Server = require('socket.io');

class Queue {
  constructor(q) {
    this.name = q;
    this.events = new Set();
    this.q = Queue.io.of(`/${q}`);
    this.q.on('connection', socket => {
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
    Queue.io = new Server (PORT);  
    Queue.io.on('connection', socket => {
      socket.on('publish', message => {
        let {queue, event, payload} = message;
        Queue.io.of(queue).to(event).emit('trigger', payload);
      });
    });
  }
}

module.exports = Queue;

// 'use strict';

// const Server = require('socket.io');

// class Queue {
//   constructor(q) {
//     this.name = q;
//     this.events = new Set();
//     this.q = Queue.io.of(`/${q}`);
//     this.q.on('connection', this.connect.bind(this));
//   }

//   connect(socket) {
//     socket.on('subscribe', (event, cb) => {
//       if(this.events.has(event)) {
//         cb && cb(undefined, `Subscribed to ${event} in ${this.name} ... ${socket.id}`)
//       }
//       else {
//         cb & cb(`Invalid event: ${event} in ${this.name}`)
//       }
//     });
//   }

//   monitorEvent(event) {
//     this.events.add(event);
//   }

//   clients(room){
//     return Object.keys(this.q.adapter.rooms[room].sockets);
//   }

//   static publish(message){
//     let {queue, event, payload} = message;
//     Queue.io.of(queue).to(event).emit('trigger', payload);
//   }

//   static start() {
//     const PORT = 3333;
//     Queue.io = new Server(PORT);  
//     Queue.io.on('connection', socket => {
//       socket.on('publish', Queue.publish);
//     });
//     console.log(`Q server up on ${PORT}`);
//   }
// }

// module.exports = Queue;