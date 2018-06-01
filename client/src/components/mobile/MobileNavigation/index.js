import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import FontIcon from 'material-ui/FontIcon'
import * as colors from 'material-ui/styles/colors'

const {object, arrayOf} = PropTypes

class MobileNavigation extends Component {
  state = {
    drawerVisible: false
  }

  static propTypes = {
    navigation: arrayOf(object),
    location: object
  }

  navDrawerToggle() {
    this.setState({drawerVisible: !this.state.drawerVisible})
  }

  pushHistoryAndClose(history, href) {
    history.push(href)
    this.setState({drawerVisible: false})
  }

  actionIcon(location, href) {
    if(location.pathname === href) {
      return (
        <FontIcon className="icon-eye" style={{marginTop: 0}}/>
      )
    }

    return null
  }

  goToSearch(history) {
    history.push("/search")
    this.setState({drawerVisible: false})
  }

  renderNavItems(items, location, history) {
    return items.map(navInfo => {
      return (
        <MenuItem
          key={navInfo.id}
          onClick={() => { this.pushHistoryAndClose(history, navInfo.href) }}
          rightIcon={this.actionIcon(location, navInfo.href)}
          style={{backgroundColor: colors.grey300}}>
          <div>
            {navInfo.id !== 1 &&
              <div className='generic-divider' style={{margin: '1px 0 0'}}/>
            }
            <i className={`icon-${navInfo.icon}`} style={{marginRight: 10}}/>
            {navInfo.title}
          </div>
        </MenuItem>
      )
    })
  }

  render() {
    const { navigation, location } = this.props
    return (
      <Route render={({history}) => (
        <div>
          <AppBar
            title="TheLocus"
            onLeftIconButtonClick={e => { this.navDrawerToggle() }}
            iconElementRight={
              <FontIcon className="icon-search" style={{marginTop: 4, color: "#fff"}}/>
            }
            style={{backgroundColor: colors.grey700, zIndex: 3}}
            onRightIconButtonClick={e => { this.goToSearch(history) }}
            />
          <Drawer
            open={this.state.drawerVisible}
            containerStyle={{backgroundColor: colors.grey300}}>
            {this.renderNavItems(navigation, location, history)}
          </Drawer>
        </div>
      )}/>
    )
  }
}

export default MobileNavigation
