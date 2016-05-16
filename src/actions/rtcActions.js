import * as types from '../constants/actionTypes'

export function readyToCall () {
  return {
    type: types.READY_TO_CALL
  }
}

export function panic () {
  return {
    type: types.PANIC
  }
}

export function roomJoined () {
  return {
    type: types.ROOM_JOINED
  }
}

export function peerDisconnected () {
  return {
    type: types.PEER_DISCONNECTED
  }
}

export function peerChangedName () {
  return {
    type: types.PEER_CHANGED_NAME
  }
}

export function peerConnected () {
  return {
    type: types.PEER_CONNECTED
  }
}

export function chatMessage () {
  return {
    type: types.CHAT_MESSAGE
  }
}
