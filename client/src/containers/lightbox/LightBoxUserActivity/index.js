import React, { Component } from 'react'
import { connect } from "react-redux"
import { Route } from 'react-router-dom'

import { fetchUserActivity } from 'redux/actions'

import ThemedDashboard from 'containers/ThemedDashboard'
import EventDashboard from 'containers/EventDashboard'
import Ticker from 'containers/Ticker'
import Footer from 'components/styled/Footer'

class LightBoxUserActivity extends Component {
  componentWillMount() {
    var id = this.props.location.pathname.split("/").reverse()[1]
    this.props.dispatch(fetchUserActivity(id))
  }

  render() {
    return (
      <Route render={({history}) => (
        <div className="ltbx-wrap" tabIndex="-1">
          <div className="ltbx-container">
            <div className="ltbx-content ltbx-fullscreen-content">
              {this.props.visit.id &&
                <ThemedDashboard>
                  <EventDashboard />
                  <Ticker />
                  <Footer />
                </ThemedDashboard>
              }
              <button
                onClick={() => history.go(-1)}
                title="Close (Esc)"
                type="button"
                className="ltbx-close">×
              </button>
            </div>
          </div>
          <div
            className="ltbx-bg"
            onClick={() => history.go(-1)}
          />
        </div>
      )}/>
    )
  }
}

const mapStateToProps = state => ({
  visit: state.visit.content
})

export default connect(mapStateToProps)(LightBoxUserActivity)
