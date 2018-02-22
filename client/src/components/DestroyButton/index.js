import React, { Component } from 'react'
import './style.css'
import { connect } from "react-redux"
import { resourceDestroy } from "../../redux/actions"
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
//import RaisedButton from 'material-ui/RaisedButton'
import { Route } from 'react-router-dom'

class DestroyButton extends Component {
  state = {
    open: false,
  }

  handleOpen() {
    if (!this.props.disabled) {
      this.setState({open: true})
    }
  }

  handleClose() {
    this.setState({open: false})
  }

  handleDelete(item, history) {
    this.props.dispatch(resourceDestroy(item, history))
    this.setState({open: false})
  }

  humanize(text) {
    return (text.charAt(0).toUpperCase() + text.slice(1).replace(/_/gi, ' '))
  }

  actions(history) {
    return (
      [
        <FlatButton
          label="Cancel"
          primary={true}
          onClick={() => {this.handleClose()}}
        />,
        <FlatButton
          label={"Delete This " + this.props.item.field_meta.resource_type}
          primary={true}
          keyboardFocused={true}
          onClick={() => {this.handleDelete(this.props.item, history)}}
        />
      ]
    )
  }

  buttonClass(disabled) {
    return("button" + (disabled ? " disabled" : ""))
  }

  render() {
    let title = "Really Delete This " + this.humanize(this.props.item.field_meta.resource_type)
    title = title + (this.props.item.meta_title ? (" \"" + this.props.item.meta_title + "\"?")  : "?")

    return (
      <Route render={({history}) => (
        <div style={{display: 'inline-block'}}>
          <div className={this.buttonClass(this.props.disabled)} onClick={() => {this.handleOpen(this.props.disabled)}}>
            <i className="icon-trash"></i>
            {this.props.children}
          </div>
          <Dialog
            title={title}
            actions={this.actions(history)}
            modal={false}
            open={this.state.open}
            onRequestClose={() => {this.handleClose()}}
          >
            This action is not recoverable.
          </Dialog>
        </div>
      )}/>
    )
  }
}

export default connect()(DestroyButton)
