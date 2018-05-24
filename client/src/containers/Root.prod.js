import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import muiThemeable from 'material-ui/styles/muiThemeable'
import { fade } from 'material-ui/utils/colorManipulator'
import * as colors from 'material-ui/styles/colors'
import DevTools from './DevTools'
import App from './App'

const theme = getMuiTheme({
  palette: {
    disabledColor: fade(colors.darkBlack, 0.75),
    borderColor: colors.grey500
  }
})

const Root = ({ store }) => (
  <Provider store={store}>
    <MuiThemeProvider muiTheme={theme}>
      <div>
        <Route render={({location}) => (
          <App location={location}/>
        )}/>
      </div>
    </MuiThemeProvider>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default muiThemeable()(Root)
