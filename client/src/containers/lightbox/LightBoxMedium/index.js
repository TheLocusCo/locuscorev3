import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

import { fetchResource, deleteUploadItem } from 'redux/actions'
import LightBoxMediumContent from 'components/lightbox/LightBoxMediumContent'
import SuccessBlock from 'containers/SuccessBlock'
import LightBoxErrorPage from 'components/lightbox/LightBoxErrorPage'

class LightBoxMedium extends Component {
  componentWillMount() {
    var id = this.props.location.pathname.split("/").reverse()[0]
    this.props.dispatch(fetchResource('medium', 'media', id))
  }

  componentWillUnmount() {
    this.props.dispatch(deleteUploadItem())
  }

  render() {
    const { object, isFetching, errorContent, location, successContent, locationToPush, dispatch } = this.props
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
                <LightBoxMediumContent {...object} dispatch={dispatch} location={location}/>
              }
              <button onClick={() => history.push(locationToPush)} title="Close (Esc)" type="button" className="ltbx-close">×</button>
            </div>
          </div>
          <div className="ltbx-bg" onClick={() => history.push(locationToPush)} />
        </div>
      )}/>
    )
  }
}

const mapStateToProps = state => ({
  object: state.medium.content,
  errorContent: state.errorMessages.items,
  successContent: state.successMessages.items,
  isFetching: state.medium.isFetching
})

export default connect(mapStateToProps)(LightBoxMedium)
