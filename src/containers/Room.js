import React, {Component, PropTypes} from 'react'
import Userlist from '../components/Userlist'
import * as rtcActions from '../actions/rtcActions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Paper from 'material-ui/lib/paper'
import Snackbar from 'material-ui/lib/snackbar'
import TextField from 'material-ui/lib/text-field'

import WebRTC from '../util/configureRtc'
const mockUsers = [
  {
    name: 'User1'
  },
  {
    name: 'User2'
  }
]

class Room extends Component {
  constructor () {
    super()
    WebRTC.on('readyToCall', () => {
      var match = /#\/(\w+)(\?|$)/.exec(window.location.hash)
      if (match && match[1]) {
        WebRTC.joinRoom(match[1])
      }
    });
  }

  render () {
    return (
      <Paper>
        <Userlist users={this.props.users} />
      </Paper>
    )
  }
}

function mapStateToProps (state) {
  return {
    users: state.users,
    rtc: state.rtc.cli
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(rtcActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Room)
