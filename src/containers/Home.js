import React, {Component, PropTypes} from 'react'
import * as rtcActions from '../actions/rtcActions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Paper from 'material-ui/lib/paper'
import Snackbar from 'material-ui/lib/snackbar'
import TextField from 'material-ui/lib/text-field'

class Home extends Component {
  render () {
    var lbl = 'Room ID'
    return (
      <Paper>
        <TextField hintText={lbl} floatingLabelText={lbl} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)
