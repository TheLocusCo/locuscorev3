import React, { Component } from 'react'
import AuthedLightBox from "../AuthedLightBox"
import LightBox from "../LightBox"

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
