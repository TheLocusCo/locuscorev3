import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { connect } from "react-redux"

import ButtonSliderItemContent from '../../components/ButtonSliderItemContent'

import { fetchWelcomeTabs } from "../../redux/actions"

class ButtonSliderItem extends Component {
  componentWillMount() {
    this.props.dispatch(fetchWelcomeTabs())
  }

  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName="group-fade-wait"
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
        transitionAppear={true}>
        <div key={this.props.id}>
          <ButtonSliderItemContent {...this.props}/>
        </div>
      </ReactCSSTransitionGroup>
    )
  }
}

const mapStateToProps = state => ({
  welcomeTabs: state.welcomeTabs.items
})

export default connect(mapStateToProps)(ButtonSliderItem)
