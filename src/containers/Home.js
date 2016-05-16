import React, {Component, PropTypes} from 'react'
import * as rtcActions from '../actions/rtcActions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Paper from 'material-ui/lib/paper'
import Snackbar from 'material-ui/lib/snackbar'
import TextField from 'material-ui/lib/text-field'

class Home extends Component {
  constructor () {
    super()
    this.onType = this.onType.bind(this)
  }

  render () {
    var lbl = 'Room ID'
    return (
      <Paper>
        <TextField onKeyDown={this.onType} hintText={lbl} floatingLabelText={lbl} />
      </Paper>
    )
  }

  onType (ev) {
    if (ev.keyCode === 13) {
      this.context.router.push(ev.target.value)
    }
  }
}

Home.contextTypes = {
  router: React.PropTypes.object.isRequired,
}

function mapStateToProps (state) {
  return {
    router:  state.routing,
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(rtcActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
