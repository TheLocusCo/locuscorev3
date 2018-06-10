import React, { Component } from 'react'

import WebResumeContent from 'components/WebResumeContent'

class WebResume extends Component {
  render() {
    return (
      <WebResumeContent {...this.props}/>
    )
  }
}

export default WebResume
