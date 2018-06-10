import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { humanize } from 'utils/string'
import DestroyButton from 'components/DestroyButton'
import { deleteEditItem, deleteNewItem } from 'redux/actions'

// Update footer based on current path
class FooterButtonsBlock extends Component {
  isShow() {
    return (
      Number.isInteger(parseInt(this.props.location.pathname.split("/").reverse()[0], 10))
    )
  }

  isEdit() {
    return (this.props.location.pathname.split("/").reverse()[0] === 'edit')
  }

  isNew() {
    return (
      this.props.location.pathname.includes("comments") ||
      this.props.location.pathname.split("/").reverse()[0] === 'new'
    )
  }

  isUserShow() {
    return (this.props.location.pathname.includes("users") && this.isShow())
  }

  getId(index) {
    return (this.props.location.pathname.split("/").reverse()[index])
  }

  pushHistoryAndClearEdit(history, locationToPush) {
    this.props.dispatch(deleteEditItem())
    history.push(locationToPush)
  }

  pushHistoryAndClearNew(history, locationToPush) {
    this.props.dispatch(deleteNewItem())
    history.push(locationToPush)
  }

  renderCreateButton(props, history) {
    if(props.userRole["pf_" + props.widgetType[1]].includes("c")) {
      return(
        <div
          className="button"
          onClick={() => {this.pushHistoryAndClearNew(
            history, `/${props.widgetType[1]}/new`
          )}}>
          <i className="icon-publish" />
          Create a New {humanize(props.widgetType[0])}
        </div>
      )
    }
  }

  renderShowButton(props, history) {
    if(props.userRole["pf_" + props.widgetType[1]].includes("r")) {
      return(
        <div
          className="button"
          onClick={() => {history.push(
            `/${props.widgetType[1]}/${this.getId(1)}`
          )}}
        >
          <i className="icon-eye" />
          Look at this {humanize(props.widgetType[0])}
        </div>
      )
    }
  }

  renderEditButton(props, history) {
    if(props.userRole["pf_" + props.widgetType[1]].includes("u")) {
      return(
        <div
          className="button"
          onClick={() => {this.pushHistoryAndClearEdit(
            history, `/${props.widgetType[1]}/${this.getId(0)}/edit`
          )}}
        >
          <i className="icon-pencil" />
          Edit this {humanize(props.widgetType[0])}
        </div>
      )
    }
  }

  renderDestroyButton(props, history) {
    if(props.userRole["pf_" + props.widgetType[1]].includes("u")) {
      let item = {}
      item.field_meta = {}
      item.field_meta.resource_type = props.widgetType[0]
      item.field_meta.resource_plural = props.widgetType[1]
      item.id = (this.isShow() ? this.getId(0) : this.getId(1))

      return(
        <DestroyButton item={item}>
          Destroy this {humanize(props.widgetType[0])}
        </DestroyButton>
      )
    }
  }

  renderActivityButton(props, history) {
    return(
      <div
        className="button"
        onClick={() => {history.push(
          `/${props.widgetType[1]}/${this.getId(0)}/activity`
        )}}
      >
        <i className="icon-chart-bar" />
        View this {humanize(props.widgetType[0])}'s Activity
      </div>
    )
  }

  render() {
    return (
      <Route render={({history}) => (
        <div style={{display: "inline-block"}}>
          {!this.isNew() && this.renderCreateButton(this.props, history)}
          {this.isEdit() && this.renderShowButton(this.props, history)}
          {this.isShow() && this.renderEditButton(this.props, history)}
          {this.isShow() && this.renderDestroyButton(this.props, history)}
          {this.isEdit() && this.renderDestroyButton(this.props, history)}
          {this.isUserShow() && this.renderActivityButton(this.props, history)}
        </div>
      )}/>
    )
  }
}

export default connect()(FooterButtonsBlock)
