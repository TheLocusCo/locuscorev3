import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import './style.css'
import Routes from 'containers/routes/Routes'
import MobileNavigation from 'containers/mobile/MobileNavigation'

import { fetchNavigation } from 'redux/actions'

class MobileContainer extends Component {
  componentDidMount() {
    this.props.dispatch(fetchNavigation())
  }

  render() {
    return (
      <div>
        <MobileNavigation location={this.props.location} />
        <ReactCSSTransitionGroup transitionName="slide-up-from-nothing" transitionAppearTimeout={3500} transitionEnterTimeout={2500} transitionLeaveTimeout={2500} transitionAppear={true}>
          <div className="mobile-main-container">
            <Routes location={this.props.location} />
          </div>
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

export default connect()(MobileContainer)
