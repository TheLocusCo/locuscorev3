import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import './style.css'
import NavigationButton from 'components/NavigationButton'
import { fetchNavigation, receiveAPIURL } from 'redux/actions'

class Navigation extends Component {
  componentDidMount() {
    this.props.dispatch(fetchNavigation())
    this.props.dispatch(receiveAPIURL())
  }

  renderList(props) {
    return props.navigation.map(buttonInfo => {
      return (
        <NavigationButton {...buttonInfo} key={buttonInfo.id} location={this.props.location} />
      )
    })
  }

  render() {
    return (
      <div className="main-navigation">
        <Link to="/search" className="search-link" />
        <a href={`${this.props.apiUrl}/api/posts.rss`} className="blog-rss-link" target="_blank">
          <i style={{top: '0px'}} className="icon-rss" />
        </a>
        <ul className="not-standard">
          { this.renderList(this.props) }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  navigation: state.navigation.items,
  apiUrl: state.apiUrl.url,
})

export default connect(mapStateToProps)(Navigation)
