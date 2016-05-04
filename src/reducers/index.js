import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import eventlist from './eventlistReducer'

export default combineReducers({
  eventlist,
  routing: routerReducer
})
