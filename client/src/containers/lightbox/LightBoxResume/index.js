import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

import LightBoxResumeContent from 'components/lightbox/LightBoxResumeContent'
import SuccessBlock from 'containers/SuccessBlock'
import LightBoxErrorPage from 'components/lightbox/LightBoxErrorPage'
import { fetchResource } from 'redux/actions'

class LightBoxResume extends Component {
  componentWillMount() {
    var id = this.props.location.pathname.split("/").reverse()[0]
    this.props.dispatch(fetchResource('resume', 'resumes', id))
  }

  render() {
    return (
      <Route render={({history}) => (
        <div className="ltbx-wrap" tabIndex="-1">
          <div className="ltbx-container">
            <div className="ltbx-content">
              <SuccessBlock content={this.props.successContent}/>
              {this.props.isFetching && !this.props.resume.id && <h1 className="section-heading larger">Loading...</h1>}
              {this.props.errorContent.length > 0 &&
                <LightBoxErrorPage errorContent={this.props.errorContent}/>
              }
              {this.props.resume.id &&
                <LightBoxResumeContent {...this.props.resume} location={this.props.location}/>
              }
              <button onClick={() => history.push(this.props.locationToPush)} title="Close (Esc)" type="button" className="ltbx-close">×</button>
            </div>
          </div>
          <div className="ltbx-bg" onClick={() => history.push(this.props.locationToPush)} />
        </div>
      )}/>
    )
  }
}

const mapStateToProps = state => ({
  resume: state.resume.content,
  successContent: state.successMessages.items,
  errorContent: state.errorMessages.items,
  isFetching: state.post.isFetching
})

export default connect(mapStateToProps)(LightBoxResume)
