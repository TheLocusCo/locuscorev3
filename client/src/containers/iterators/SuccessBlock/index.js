import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import SuccessItem from 'components/iteratorItems/SuccessItem'
import { dismissSuccess } from 'redux/actions'

class SuccessBlock extends Component {
  dismissSuccess(messageWithKey) {
    this.props.dispatch(dismissSuccess(messageWithKey))
  }

  renderRows(props) {
    if (props.content.length > 0) {
      var count = 0
      return props.content.map(messageWithKey => {
        count++
        return (
          <SuccessItem messageWithKey={messageWithKey} key={count} onClick={() => {this.dismissSuccess(messageWithKey)}} />
        )}
      )

    } else {
      return null
    }
  }

  render() {
    return (
      <ReactCSSTransitionGroup transitionName="group-fade-wait" transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={500} transitionAppear={true}>
        { this.renderRows(this.props) }
      </ReactCSSTransitionGroup>
    )
  }
}

export default connect()(SuccessBlock)
