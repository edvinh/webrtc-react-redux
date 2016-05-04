import React, {PropTypes, Component} from 'react'
import List from 'material-ui/lib/lists/list'
import ListItem from 'material-ui/lib/lists/list-item'

export default class Eventlist extends Component  {
  render () {
    return (
      <List>
        {this.props.events.map((event, i) => {
          return (
            <ListItem
              primaryText={event.name}
              key={i}
            />
          )
        })}
      </List>
    )
  }
}

Eventlist.propTypes = {
  events: PropTypes.array.isRequired
}
