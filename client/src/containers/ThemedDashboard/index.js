import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import styled, {ThemeProvider, injectGlobal} from 'styled-components'
import ThemePicker from '../ThemePicker'
import {getTheme} from '../../redux/selectors'

const {object, array} = PropTypes

const Root = styled.div`
  background-color: ${({theme}) => theme.background};
  color: ${({theme}) => theme.color};
  font: 11px sans-serif;
  padding: 8px;
`

const ThemedDashboard = ({theme, children}) => (
  <ThemeProvider theme={theme}>
    <Root>
      {children}
      <ThemePicker />
    </Root>
  </ThemeProvider>
)

ThemedDashboard.propTypes = {
  theme: object,
  children: array
}

const mapStateToProps = (state, ownProps) => ({
  theme: getTheme(state)
})

export default connect(mapStateToProps)(ThemedDashboard)
