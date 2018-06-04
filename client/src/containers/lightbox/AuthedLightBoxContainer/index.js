import React, { Component } from 'react'

import './style.css'
import AuthedLightBox from "containers/lightbox/AuthedLightBox"
import LightBox from "containers/lightbox/LightBox"

class AuthedLightBoxContainer extends Component {
  render() {
    if (this.props.currentUser.email) {
      return (
        <AuthedLightBox location={this.props.location} />
      )
    } else {
      return (
        <LightBox location={this.props.location} />
      )
    }
  }
}

export default AuthedLightBoxContainer
