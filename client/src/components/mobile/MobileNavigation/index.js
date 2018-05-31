import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import FontIcon from 'material-ui/FontIcon'

const {object, string, arrayOf} = PropTypes

class MobileNavigation extends Component {
  state = {
    drawerVisible: false
  }

  static propTypes = {
    navigation: arrayOf(object),
    apiUrl: string,
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
          rightIcon={this.actionIcon(location, navInfo.href)}>
          <div>
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
            onRightIconButtonClick={e => { this.goToSearch(history) }}
            />
          <Drawer open={this.state.drawerVisible}>
            {this.renderNavItems(navigation, location, history)}
          </Drawer>
        </div>
      )}/>
    )
  }
}

export default MobileNavigation
