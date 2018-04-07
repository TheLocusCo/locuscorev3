import React, { Component } from 'react'
import './style.css'
import LightBoxMediumContent from '../../components/LightBoxMediumContent'
import SuccessBlock from '../SuccessBlock'
//import LightBoxComments from '../LightBoxComments'
import LightBoxErrorPage from '../../components/LightBoxErrorPage'
import { connect } from "react-redux"
import { fetchResource, deleteUploadItem, receiveAPIURL } from "../../redux/actions"
import { Route } from 'react-router-dom'

class LightBoxMedium extends Component {
  componentWillMount() {
    var id = this.props.location.pathname.split("/").reverse()[0]
    this.props.dispatch(fetchResource('medium', 'media', id))
    this.props.dispatch(receiveAPIURL())
  }

  componentWillUnmount() {
    this.props.dispatch(deleteUploadItem())
  }

  render() {
    const { object, isFetching, errorContent, location, successContent, locationToPush, apiUrl, dispatch } = this.props
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
                <LightBoxMediumContent {...object} apiUrl={apiUrl} dispatch={dispatch} location={location}/>
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
  apiUrl: state.apiUrl.url,
  errorContent: state.errorMessages.items,
  successContent: state.successMessages.items,
  isFetching: state.medium.isFetching
})

export default connect(mapStateToProps)(LightBoxMedium)
