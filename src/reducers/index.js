import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import users from './usersReducer'
import messages from './messagesReducer'
import rtc from './rtcReducer'

export default combineReducers({
  users,
  messages,
  rtc,
  routing: routerReducer
})
