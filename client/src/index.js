import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
//import { syncHistoryWithStore } from 'react-router-redux'

import './styles/reset.css'
import './styles/icons.css'
import './styles/structure.css'
import './styles/silver_skin.css'

import registerServiceWorker from './registerServiceWorker';
import Root from './containers/Root'
//import WebGraphic from "./components/WebGraphic"
import configureStore from "./redux/store/configureStore"

//console.log("????store" + JSON.stringify(store.getState()))

// Create an enhanced history that syncs navigation events with the store
//const history = syncHistoryWithStore(browserHistory, store)

const store = configureStore()

ReactDOM.render((
  <Router>
    <Root store={store} />
  </Router>
), document.getElementById('root'))

registerServiceWorker()
//<Route path="/web_graphics" component={WebGraphic}/>
