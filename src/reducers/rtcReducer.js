import * as types from '../constants/actionTypes'
const initialState = {
  state: '',
  cli: undefined
}
export default function rtcReducer (state = initialState, action) {
  switch (action.type) {
    case types.SET_CLIENT:
      return {
        ...state,
        client: action.client
      }
    case types.JOIN_ROOM:
      return {
        ...state,
        state: 'connecting'
      }
    case types.ROOM_JOINED:
      return {
        ...state,
        state: 'connected'
      }
    case types.READY_TO_CALL:
      return {
        ...state,
        state: 'readyToCall'
      }
    default:
      return state
  }
}
