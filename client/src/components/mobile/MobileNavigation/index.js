import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

const {object, string, arrayOf, func} = PropTypes

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

  isActive(href, location) {
    return ( location.pathname === href ? "active" : "" )
  }

  renderNavItems(items, location) {
    return items.map(navInfo => {
      return (
        <MenuItem
          key={navInfo.id}>
          <Link to={navInfo.href} className={this.isActive(navInfo.href, location)}>
            <i className={`icon-${navInfo.icon}`} />
            {navInfo.title}
          </Link>
        </MenuItem>
      )
    })
  }

  render() {
    const { navigation, location } = this.props
    return (
      <div>
        <AppBar title="TheLocus" onLeftIconButtonClick={e => { this.navDrawerToggle() }}/>
        <Drawer open={this.state.drawerVisible}>
          {this.renderNavItems(navigation, location)}
        </Drawer>
      </div>
    )
  }
}

export default MobileNavigation
