![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Q Server

### Author: Siobhan Niess and Becca Lee

### Links and Resources
* [repo](https://github.com/niesssiobhan/10-project-q)
* [travis](https://travis-ci.com/niesssiobhan/10-project-q)

### Modules
#### `client.js`
This file is the provided file that we have connected to the subscriber.js. It creates a Queue and subscribes to events.
#### `publish.js`
This file is connected to the client.js and it subscribes to events in the Queue. 
#### `server.js`
This file was provided to us and is connected with the server.js. This listens to the client.js and the publisher.js, it also monitors events and creates new Queues.
#### `logger.js`
This file logs messages when it hears an event
#### `lib/server.js`
This file is connected to the queue-server.js. This starts the server and stops the server and creates Queues and opens events.
#### `lib/subscriber.js`
This file is connected to the publisher.js. This publishes events to the Queue and sends them to the server. 
#### `lib/publisher.js`
This file is connected to the simulator.js. This publishes events to the Queue and sends them to the server. 
##### Exported Values and Methods

### Setup
#### `.env` requirements
* `PORT` - Port Number 3000

#### Running the app
* Open four windows in your terminal
* In the first run `node server.js` 
* In the next run `node publish.js`
* In the next run `node client.js`
* In the last, run `node logger.js`


#### Tests
* How do you run tests?
* What assertions were made?
* What assertions need to be / should be made?
Testing TBD!