import React, { Component } from 'react'
import { connect } from "react-redux"
import { Link } from 'react-router-dom'
import ahoy from 'ahoy.js'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import './style.css'
import 'styles/animations.css' //animations only load correctly when loaded very last

import AuthedContainer from "containers/AuthedContainer"
import MobileContainer from "containers/mobile/MobileContainer"
import AuthedLightBoxContainer from "containers/lightbox/AuthedLightBoxContainer"
import NotificationsBlock from "containers/NotificationsBlock"

import { userAuth } from "redux/actions"

class App extends Component {
  componentDidMount() {
    this.props.dispatch(userAuth())
  }

  renderContainer() {
    if(window.innerWidth > 980 || this.props.currentUser.email) {
      return (
        <AuthedContainer
          currentUser={this.props.currentUser}
          location={this.props.location}
        />
      )
    } else {
      return (
        <MobileContainer
          currentUser={this.props.currentUser}
          location={this.props.location}
        />
      )
    }
  }

  render() {
    return (
      <div className="main-wrapper">
        {ahoy.trackView()}
        {window.innerWidth > 980 &&
          <header className="header">
            <ReactCSSTransitionGroup
              transitionName="slide-header"
              transitionAppearTimeout={3500}
              transitionEnterTimeout={2500}
              transitionLeaveTimeout={2500}
              transitionAppear={true}>
              <div className="header-container">
                <div className="header-top-left">
                  <div className="header-top-left-center" />
                  <div className="logo-background">
                    <Link to="/">
                      <img src="/images/main_logo.png" alt="locus" />
                    </Link>
                  </div>
                </div>
                <div className="header-top-right">
                  <div className="header-top-right-center" />
                </div>
              </div>
            </ReactCSSTransitionGroup>
          </header>
        }
        {this.renderContainer()}
        {window.innerWidth > 980 &&
          <div>
            <ReactCSSTransitionGroup
              transitionName="grow-right"
              transitionAppearTimeout={3500}
              transitionEnterTimeout={2500}
              transitionLeaveTimeout={2500}
              transitionAppear={true}>
              <div className="left-background" />
            </ReactCSSTransitionGroup>
            <ReactCSSTransitionGroup
              transitionName="grow-left"
              transitionAppearTimeout={3500}
              transitionEnterTimeout={2500}
              transitionLeaveTimeout={2500}
              transitionAppear={true}>
              <div className="right-background" />
            </ReactCSSTransitionGroup>
          </div>
        }
        {window.innerWidth > 980 &&
          <footer>
            <p />
          </footer>
        }
        <AuthedLightBoxContainer
          currentUser={this.props.currentUser}
          location={this.props.location}
        />
        {this.props.currentUser.email &&
          <div className="maze" />
        }
        {!this.props.currentUser.email &&
          <div className="flowers" />
        }
        <div className="main-background" />
        {this.props.currentUser.email &&
          <NotificationsBlock currentUser={this.props.currentUser} />
        }
        {window.innerWidth > 980 &&
          <div className="fixed-footer">
            <div className="fixed-footer-bottom-left">
              <div className="fixed-footer-bottom-left-center" />
            </div>
            <div className="fixed-footer-bottom-right">
              <div className="fixed-footer-bottom-right-center" />
            </div>
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser
})

export default connect(mapStateToProps)(App)
