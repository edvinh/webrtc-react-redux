import * as types from '../constants/actionTypes'

let initialState = {
  events: [
    {id: 1, name: 'farligt event', url: 'uri://rednex'},
  ]
}

export default function eventlistReducer (state = initialState, action) {
  switch (action.type) {
    case types.RECEIVE_EVENT:
      let events = state.events.slice()
      events.push(action.payload)
      return {
        ...state,
        events
      }
    default:
      return state
  }
}
