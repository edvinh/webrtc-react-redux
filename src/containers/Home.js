import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Paper from 'material-ui/lib/paper'
import Snackbar from 'material-ui/lib/snackbar'
import TextField from 'material-ui/lib/text-field'
import {push} from 'react-router-redux'

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
      this.props.push('/' + ev.target.value)
    }
  }
}

function mapStateToProps (state) {
  return {
    router:  state.routing,
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    push
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
