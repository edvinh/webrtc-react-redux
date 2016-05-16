import React, {Component, PropTypes} from 'react'
import Userlist from '../components/Userlist'
import * as rtcActions from '../actions/rtcActions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Paper from 'material-ui/lib/paper'
import Snackbar from 'material-ui/lib/snackbar'
import TextField from 'material-ui/lib/text-field'

const mockUsers = [
  {
    name: 'User1'
  },
  {
    name: 'User2'
  }
]

class Room extends Component {
  render () {
    return (
      <Paper>
        <Userlist users={mockUsers} />
      </Paper>
    )
  }
}

function mapStateToProps (state) {
  return {
    socket: state.socket
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(rtcActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Room)
