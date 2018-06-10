import React, { Component } from 'react'
import { connect } from 'react-redux'

import './style.css'
import TabsItem from 'components/TabsItem'
import TabsButton from 'components/TabsButton'
import { setTabContent } from 'redux/actions'

class TabsBlock extends Component {
  findIndexOfId(id) {
    return function(item) {
      return item.id === id
    }
  }

  setToActive(id, e) {
    var newContent = []
    var index = 0

    this.props.content.map(indivProps => {
      newContent.push(indivProps)
      index++
      return (
        newContent[index-1].active = false
      )
    })

    var activeIndex = newContent.findIndex(this.findIndexOfId(id))

    newContent[activeIndex].active = true

    this.props.dispatch(setTabContent(newContent, this.props.mode))
  }

  renderContent(props) {
    return props.content.map(indivProps => {
      if (indivProps.active) {
        return (
          <TabsItem {...indivProps} key={indivProps.id} />
        )
      } else {
        return null
      }
    })
  }

  renderTabButtonsForContent(props) {
    return props.content.map(indivProps => {
      return (
        <TabsButton {...indivProps} key={indivProps.id} onClick={(e) => this.setToActive(indivProps.id, false, e)} />
      )
    })
  }

  render() {
    return (
      <div className="tabs-wrapper">
        <ul className="tabs-vertical not-standard">
          { this.renderTabButtonsForContent(this.props) }
        </ul>
        <div className="panes">
          { this.renderContent(this.props) }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps)(TabsBlock)
