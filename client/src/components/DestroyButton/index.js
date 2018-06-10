import React, { Component } from 'react'
import { connect } from 'react-redux'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import { Route } from 'react-router-dom'

import { resourceDestroy } from 'redux/actions'
import { humanize } from 'utils/string'

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
    let title = "Really Delete This " + humanize(this.props.item.field_meta.resource_type)
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
