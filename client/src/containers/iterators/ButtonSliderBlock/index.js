import React, { Component } from 'react'
import { connect } from 'react-redux'

import './style.css'
import ButtonSliderItem from 'containers/ButtonSliderItem'
import ButtonSliderPagerButton from 'components/ButtonSliderPagerButton'
//import ReactCSSTransitionReplace from 'react-css-transition-replace'
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { setButtonSliderContent } from "redux/actions"

class ButtonSliderBlock extends Component {
  findIndexOfId(id) {
    return function(item) {
      return item.id === id
    }
  }

  setToActive(id, setNextActive, e) {
    var newContent = []
    var index = 0

    this.props.content.map(indivProps => {
      newContent.push(indivProps)
      index++
      return (
        newContent[index-1].active = false
      )
    })

    if (setNextActive) {
      id++
    }

    var activeIndex = newContent.findIndex(this.findIndexOfId(id))

    newContent[activeIndex].active = true

    this.props.dispatch(setButtonSliderContent(newContent, this.props.mode))
  }

  renderContent(props) {
    return props.content.map(indivProps => {
      if (indivProps.active) {
        return (
          <ButtonSliderItem {...indivProps} key={indivProps.id} onClick={(e) => this.setToActive(indivProps.id, true, e)} />
        )
      } else {
        return null
      }
    })
  }

  renderButtonSliderPagerButtonsForContent(props) {
    return props.content.map(indivProps => {
      return (
        <ButtonSliderPagerButton {...indivProps} key={indivProps.id} onClick={(e) => this.setToActive(indivProps.id, false, e)} />
      )
    })
  }

  render() {
    return (
      <div className="slider">
        <div className="items">
          { this.renderContent(this.props) }
        </div>
        <div className="pager" style={{top: "0"}}>
          <div>
            { this.renderButtonSliderPagerButtonsForContent(this.props) }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps)(ButtonSliderBlock)
