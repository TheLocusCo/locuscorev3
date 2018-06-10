import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import './style.css'
import Routes from "containers/routes/Routes"
import AuthedRoutes from "containers/routes/AuthedRoutes"
import Navigation from "containers/Navigation"
import AuthedNavigation from "containers/AuthedNavigation"
import ContentFooter from "components/ContentFooter"
import AuthedContentFooter from "containers/AuthedContentFooter"

class AuthedContainer extends Component {
  render() {
    if (this.props.currentUser.email) {
      return (
        <ReactCSSTransitionGroup transitionName="slide-up-from-nothing" transitionAppearTimeout={1500} transitionEnterTimeout={2500} transitionLeaveTimeout={2500} transitionAppear={true}>
          <div className="main-container">
            <AuthedNavigation currentUser={this.props.currentUser} location={this.props.location} />
            <div className="page-content-wrapper">
              <AuthedRoutes location={this.props.location} currentUser={this.props.currentUser} />
              <AuthedContentFooter location={this.props.location} showLogout={true} />
            </div>
          </div>
        </ReactCSSTransitionGroup>
      )
    } else {
      return (
        <ReactCSSTransitionGroup transitionName="slide-up-from-nothing" transitionAppearTimeout={3500} transitionEnterTimeout={2500} transitionLeaveTimeout={2500} transitionAppear={true}>
          <div className="main-container">
            <Navigation location={this.props.location} />
            <div className="page-content-wrapper">
              <Routes location={this.props.location} />
              <ContentFooter />
            </div>
          </div>
        </ReactCSSTransitionGroup>
      )
    }
  }
}

export default AuthedContainer
