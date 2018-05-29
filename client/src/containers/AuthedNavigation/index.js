import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import './style.css'
import NavigationButton from '../../components/NavigationButton'
import { fetchRoleNavigation, receiveAPIURL } from "../../redux/actions"

class AuthedNavigation extends Component {
  componentDidMount() {
    // User just authenticated from login screen
    if (this.props.location.pathname === "/login") {
      this.props.history.push("/")
    }
    this.props.dispatch(fetchRoleNavigation(this.props.currentUser))
    this.props.dispatch(receiveAPIURL())
  }

  renderList(props) {
    return props.authedNavigation.map(buttonInfo => {
      return (
        <NavigationButton {...buttonInfo} key={buttonInfo.id} location={this.props.location} />
      )
    })
  }

  render() {
    return (
      <div className="main-navigation">
        <Link to="/search" className="search-link" />
        <a href={`${this.props.apiUrl}/api/posts.rss`} className="blog-rss-link" target="_blank" />
        <ul className="not-standard">
          { this.renderList(this.props) }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  authedNavigation: state.authedNavigation.items,
  apiUrl: state.apiUrl.url,
})

export default connect(mapStateToProps)(withRouter(AuthedNavigation))
