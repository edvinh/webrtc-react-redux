import React, {Component, PropTypes} from 'react'
import Eventlist from '../components/Eventlist'
import * as eventActions from '../actions/eventlistActions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Paper from 'material-ui/lib/paper'
import Snackbar from 'material-ui/lib/snackbar'

class EventPage extends Component {
  constructor () {
    super()
    this.state = {
      snackbarOpen: false
    }
  }

  componentDidMount () {
    setTimeout(() => this.props.fetchEvents(), 500)
  }

  render () {
    return (
      <Paper>
        <Eventlist events={this.props.eventlist.events}/>
      </Paper>
    )
  }
}

EventPage.propTypes = {
  eventlist: PropTypes.object.isRequired
}

function mapStateToProps (state) {
  return {
    eventlist: state.eventlist
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    ...eventActions
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EventPage)
