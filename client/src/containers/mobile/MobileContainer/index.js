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
      <div>
        <MobileNavigation location={this.props.location} />
        <ReactCSSTransitionGroup transitionName="slide-up-from-nothing" transitionAppearTimeout={3500} transitionEnterTimeout={2500} transitionLeaveTimeout={2500} transitionAppear={true}>
          <MobileRoutes location={this.props.location} />
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

export default connect()(MobileContainer)
