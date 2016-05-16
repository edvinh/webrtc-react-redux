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
    default:
      return state
  }
}
