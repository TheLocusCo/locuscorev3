import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import ErrorItem from 'components/iteratorItems/ErrorItem'
import { dismissError } from "redux/actions"

class ErrorBlock extends Component {
  dismissError(messageWithKey) {
    this.props.dispatch(dismissError(messageWithKey))
  }

  renderRows(props) {
    if (props.content && props.content.length > 0) {
      var count = 0
      return props.content.map(messageWithKey => {
        count++
        return (
          <ErrorItem messageWithKey={messageWithKey} key={count} bypassKeys={props.bypassKeys} onClick={() => {this.dismissError(messageWithKey)}} />
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

export default connect()(ErrorBlock)
