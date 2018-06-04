import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import './style.css'
import NavigationButton from 'components/NavigationButton'
import { fetchNavigation } from 'redux/actions'
import { apiUrl } from 'utils/http'

class Navigation extends Component {
  componentDidMount() {
    this.props.dispatch(fetchNavigation())
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
        <a href={`${apiUrl()}/api/posts.rss`} className="blog-rss-link" target="_blank">
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
  navigation: state.navigation.items
})

export default connect(mapStateToProps)(Navigation)
