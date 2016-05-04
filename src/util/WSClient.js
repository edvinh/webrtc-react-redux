export default class WSClient {
  constructor(url, dispatcher) {
    this.websocket = new WebSocket(`ws://${url}`)
    this.websocket.onmessage = (event) => {
      this.dispatcher(JSON.parse(event.data))
    }
  }

  send(event) {
    this.websocket.send(
      JSON.stringify(event)
    )
  }

  close() {
    this.websocket.close()
  }

  setDispatcher (dispatcher) {
    this.dispatcher = dispatcher
  }
}
