import React from 'react'
import {Route} from 'react-router'
import App from './containers/App'
import EventPage from './containers/EventPage'
import NotFound from './containers/NotFound'

const routes = (
  <Route component={App}>
    <Route path='/' component={EventPage} />
    // Put other routes here
    <Route path='*' component={NotFound} />
  </Route>
)

export default routes
