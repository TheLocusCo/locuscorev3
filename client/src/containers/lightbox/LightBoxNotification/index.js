import React, { Component } from 'react'
import './style.css'
import LightBoxNotificationContent from '../../../components/lightbox/LightBoxNotificationContent'
import { connect } from "react-redux"
import { fetchResource } from "../../../redux/actions"
import { Route } from 'react-router-dom'
import SuccessBlock from '../../SuccessBlock'
import LightBoxErrorPage from '../../../components/lightbox/LightBoxErrorPage'

class LightBoxNotification extends Component {
  componentWillMount() {
    var id = this.props.location.pathname.split("/").reverse()[0]
    this.props.dispatch(fetchResource('notification', 'notifications', id))
  }

  render() {
    return (
      <Route render={({history}) => (
        <div className="ltbx-wrap" tabIndex="-1">
          <div className="ltbx-container">
            <div className="ltbx-content">
              <SuccessBlock content={this.props.successContent}/>
              {this.props.isFetching && !this.props.post.id && <h1 className="section-heading larger">Loading...</h1>}
              {this.props.errorContent.length > 0 &&
                <LightBoxErrorPage errorContent={this.props.errorContent}/>
              }
              {this.props.notification.id &&
                <LightBoxNotificationContent {...this.props.notification} location={this.props.location}/>
              }
              <button onClick={() => history.go(-1)} title="Close (Esc)" type="button" className="ltbx-close ltbx-back"><i className="icon-back"/></button>
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
  notification: state.notification.content,
  errorContent: state.errorMessages.items,
  successContent: state.successMessages.items,
  isFetching: state.post.isFetching
})

export default connect(mapStateToProps)(LightBoxNotification)
