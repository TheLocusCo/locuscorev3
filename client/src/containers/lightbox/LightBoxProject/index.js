import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

import LightBoxProjectContent from 'components/lightbox/LightBoxProjectContent'
import SuccessBlock from 'containers/SuccessBlock'
import LightBoxComments from 'containers/lightbox/LightBoxComments'
import LightBoxErrorPage from 'components/lightbox/LightBoxErrorPage'
import { fetchResource } from 'redux/actions'

class LightBoxProject extends Component {
  componentWillMount() {
    var id = this.props.location.pathname.split("/").reverse()[0]
    this.props.dispatch(fetchResource('project', 'projects', id))
  }

  render() {
    const { object, isFetching, errorContent, location, successContent, locationToPush } = this.props
    return (
      <Route render={({history}) => (
        <div className="ltbx-wrap" tabIndex="-1">
          <div className="ltbx-container">
            <div className="ltbx-content">
              <SuccessBlock content={successContent}/>
              {isFetching && !object.id && <h1 className="section-heading larger">Loading...</h1>}
              {errorContent.length > 0 &&
                <LightBoxErrorPage errorContent={errorContent}/>
              }
              {object.id &&
                <LightBoxProjectContent {...object} location={location}/>
              }
              {this.props.object.id &&
                <LightBoxComments
                  comments={object.comments}
                  resourceType={object.field_meta.resource_type}
                  resourceId={object.id}
                  successContent={successContent}
                />
              }
              <button
                onClick={() => history.go(-1)}
                title="Go back to the previous page"
                type="button"
                className="ltbx-close ltbx-back">
                <i className="icon-back"/>
              </button>
              <button
                onClick={() => history.push(locationToPush)}
                title="Close (Esc)"
                type="button"
                className="ltbx-close">
                ×
              </button>
            </div>
          </div>
          <div className="ltbx-bg" onClick={() => history.push(locationToPush)} />
        </div>
      )}/>
    )
  }
}

const mapStateToProps = state => ({
  object: state.project.content,
  errorContent: state.errorMessages.items,
  successContent: state.successMessages.items,
  isFetching: state.post.isFetching
})

export default connect(mapStateToProps)(LightBoxProject)
