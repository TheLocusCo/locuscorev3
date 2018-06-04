import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import registerServiceWorker from './registerServiceWorker'
import Root from 'containers/Root'
import { verifyCredentials } from './reduxTokenAuthConfig'
import configureStore from 'redux/store/configureStore'

const store = configureStore()
verifyCredentials(store)

ReactDOM.render((
  <Router>
    <Root store={store} />
  </Router>
), document.getElementById('root'))

registerServiceWorker()
