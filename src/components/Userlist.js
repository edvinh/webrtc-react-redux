import React, {PropTypes, Component} from 'react'
import List from 'material-ui/lib/lists/list'
import ListItem from 'material-ui/lib/lists/list-item'

export default class Eventlist extends Component  {
  render () {
    return (
      <List>
        {this.props.users.map((u, i) => {
          return (
            <ListItem
              primaryText={u.name}
              key={i}
            />
          )
        })}
      </List>
    )
  }
}
