var WebSocketServer = require('ws').Server
var wss = new WebSocketServer({ port: 8080 });
var evt = {
  type: 'RECEIVE_EVENT',
  payload: {
    name: 'jao... ' + Math.random()
  }
}

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    evt = {
      type: 'RECEIVE_EVENT',
      payload: {
        name: 'Explicitly fetched event nr ' + Math.random()
      }
    }
    console.log('received: %s', message);
    ws.send(JSON.stringify(evt));
  });

  setInterval(function () {
    var evt = {
      type: 'RECEIVE_EVENT',
      payload: {
        name: 'Event nr ' + Math.random()
      }
    }
    ws.send(JSON.stringify(evt))
  }, 1000)
});
