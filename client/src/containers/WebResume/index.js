import React, { Component } from 'react'
import { connect } from "react-redux"

import WebResumeContent from '../../components/WebResumeContent'
import { fetchResumeHost } from "../../redux/actions"

class WebResume extends Component {
  componentDidMount() {
    this.props.dispatch(fetchResumeHost())
  }

  render() {
    return (
      <WebResumeContent {...this.props}/>
    )
  }
}

const mapStateToProps = state => ({
  resumeHost: state.resumeHost.host
})

export default connect(mapStateToProps)(WebResume)
