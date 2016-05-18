import * as types from '../constants/actionTypes'

let initialState = []

export default function messagesReducer (state = initialState, action) {
  const {payload} = action;
  switch (action.type) {
    case types.CHAT_MESSAGE:
      return {
        ...state,
        payload
      }
    default:
      return state
  }
}