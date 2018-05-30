import React, { Component } from 'react'
import { connect } from "react-redux"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import MobileRoutes from "../MobileRoutes"
import MobileNavigation from "../MobileNavigation"
//import ContentFooter from "../ContentFooter"

import { fetchNavigation } from "../../../redux/actions"

class MobileContainer extends Component {
  componentDidMount() {
    this.props.dispatch(fetchNavigation())
    //this.props.dispatch(receiveAPIURL())
  }

  render() {
    return (
      <ReactCSSTransitionGroup transitionName="slide-up-from-nothing" transitionAppearTimeout={3500} transitionEnterTimeout={2500} transitionLeaveTimeout={2500} transitionAppear={true}>
        <div className="main-container">
          <MobileNavigation location={this.props.location} />
          <div className="page-content-wrapper">
            <MobileRoutes location={this.props.location} />
          </div>
        </div>
      </ReactCSSTransitionGroup>
    )
  }
}

export default connect()(MobileContainer)
