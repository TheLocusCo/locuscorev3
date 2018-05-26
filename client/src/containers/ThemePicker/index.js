import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import styled from 'styled-components'
import _ from 'lodash'

import themes from '../../utils/themes'
import { selectTheme } from '../../redux/actions'
import { actualThemeName } from '../../utils/string'

const {func} = PropTypes

const List = styled.ul`
  position: absolute;
  bottom: 1px;
  left: 144px;
  margin: 0 8px 2.5px 0;
`

const Item = styled.li`
  display: inline;
  margin-left: 5px;
  cursor: pointer;
`

class ThemePicker extends React.Component {
  handleSelectTheme = theme => e => {
    this.props.selectTheme(theme)
  }

  render() {
    return (
      <List className="not-standard">
        {_.keys(themes).map(theme => (
          <Item key={theme} onClick={this.handleSelectTheme(theme)}>
            {actualThemeName(theme)}
          </Item>
        ))}
      </List>
    )
  }
}

ThemePicker.propTypes = {
  selectTheme: func
}

const mapDispatchToProps = {
  selectTheme
}

export default connect(null, mapDispatchToProps)(ThemePicker)
