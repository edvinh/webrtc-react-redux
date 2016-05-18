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
  }

  // TODO: Not related to view. Should be done
  // in some kind of rtc controller
  componentWillReceiveProps (props) {
    if (props.state === 'readyToCall') {
      if (props.route) {
        this.props.joinRoom(props.route)
      }
    }
  }

  render () {
    return (
      <Paper>
        <Userlist users={this.props.users} />
      </Paper>
    )
  }
}

function mapStateToProps (state, ownProps) {
  return {
    users: state.users,
    state: state.rtc.state,
    route: ownProps.location.pathname.substr(1)
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(rtcActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Room)
