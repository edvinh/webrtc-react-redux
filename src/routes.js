import React from 'react'
import {Route} from 'react-router'
import App from './containers/App'
import Home from './containers/Home'
import Room from './containers/Room'
import NotFound from './containers/NotFound'

const routes = (
  <Route component={App}>
    <Route path='/' component={Home} />
    <Route path='/*' component={Room} />
    // Put other routes here
    <Route path='*' component={NotFound} />
  </Route>
)

export default routes
