import React, { Component } from 'react'
import './style.css'
import '../../styles/animations.css' //animations only load correctly when loaded very last
import { connect } from "react-redux"
import { Link } from 'react-router-dom'
import ahoy from 'ahoy.js'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import AuthedContainer from "../AuthedContainer"
import AuthedLightBoxContainer from "../AuthedLightBoxContainer"
import NotificationsBlock from "../NotificationsBlock"

import { userAuth } from "../../redux/actions"

class App extends Component {
  componentDidMount() {
    this.props.dispatch(userAuth())
  }

  render() {
    return (
      <div className="main-wrapper">
        {ahoy.trackView()}
        {window.innerWidth > 980 &&
          <header className="header">
            <ReactCSSTransitionGroup transitionName="slide-header" transitionAppearTimeout={3500} transitionEnterTimeout={2500} transitionLeaveTimeout={2500} transitionAppear={true}>
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
        <ReactCSSTransitionGroup transitionName="grow-right" transitionAppearTimeout={3500} transitionEnterTimeout={2500} transitionLeaveTimeout={2500} transitionAppear={true}>
          <div className="left-background" />
        </ReactCSSTransitionGroup>
        <ReactCSSTransitionGroup transitionName="grow-left" transitionAppearTimeout={3500} transitionEnterTimeout={2500} transitionLeaveTimeout={2500} transitionAppear={true}>
          <div className="right-background" />
        </ReactCSSTransitionGroup>
        <AuthedContainer currentUser={this.props.currentUser} location={this.props.location} />
        {window.innerWidth > 980 &&
          <footer>
            <p />
          </footer>
        }
        <AuthedLightBoxContainer currentUser={this.props.currentUser} location={this.props.location} />
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
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser
})

export default connect(mapStateToProps)(App)
