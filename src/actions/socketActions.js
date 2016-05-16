import * as types from '../constants/actionTypes'

export function fetchEvents () {
  return {
    type: types.FETCH_EVENTS,
    remote: true
  }
}
