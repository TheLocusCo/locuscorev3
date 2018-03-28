import React, { Component } from 'react'
import './style.css'
import LightBoxResumeContent from '../../components/LightBoxResumeContent'
import { connect } from "react-redux"
import { fetchResource } from "../../redux/actions"
import { Route } from 'react-router-dom'
import SuccessBlock from '../SuccessBlock'
import LightBoxErrorPage from '../../components/LightBoxErrorPage'

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
                <LightBoxResumeContent {...this.props.resume} location={this.props.location} resumeHost={this.props.resumeHost}/>
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
  resumeHost: state.resumeHost.host,
  successContent: state.successMessages.items,
  errorContent: state.errorMessages.items,
  isFetching: state.post.isFetching
})

export default connect(mapStateToProps)(LightBoxResume)
