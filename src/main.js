import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import attachFastClick from 'fastclick'
import configureStore from './store/configureStore'
import {browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
import WSClient from './util/WSClient'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const rootEl = document.getElementById('root')
// Remove 300ms tap delay on mobile devices
attachFastClick.attach(document.body)

// Expose globally
window.React = React

const cli = new WSClient('localhost:8080')
const store = configureStore(browserHistory, cli, window.INITIAL_STATE)
const history = syncHistoryWithStore(browserHistory, store)
cli.setDispatcher(store.dispatch)

let render = () => {
  const Root = require('./containers/Root').default
  ReactDOM.render(
    <Root
      history={history}
      store={store}
    />,
    rootEl
  )
}

if (module.hot) {
  const renderApp = render
  const renderError = (err) => {
    const RedBox = require('redbox-react')
    ReactDOM.render(
      <RedBox error={err} />,
      rootEl
    )
  }
  render = () => {
    try {
      renderApp()
    } catch (err) {
      renderError(err)
    }
  }
  module.hot.accept('./containers/Root', render)
}
render()
