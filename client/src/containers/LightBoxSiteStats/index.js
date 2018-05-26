import React, { Component } from 'react'
import { connect } from "react-redux"
import { Route } from 'react-router-dom'

import { fetchSiteStatsSuperVisit } from "../../redux/actions"

import ThemedDashboard from '../ThemedDashboard'
import EventDashboard from '../EventDashboard'
import Ticker from '../Ticker'
import Footer from '../../components/styled/Footer'

class LightBoxSiteStats extends Component {
  componentWillMount() {
    this.props.dispatch(fetchSiteStatsSuperVisit())
  }

  render() {
    return (
      <Route render={({history}) => (
        <div className="ltbx-wrap" tabIndex="-1">
          <div className="ltbx-container">
            <div className="ltbx-content ltbx-fullscreen-content">
              {this.props.visit.id === 0 &&
                <ThemedDashboard>
                  <EventDashboard />
                  <Footer>
                    <Ticker />
                  </Footer>
                </ThemedDashboard>
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
  visit: state.visit.content,
  isFetching: state.visit.isFetching
})

export default connect(mapStateToProps)(LightBoxSiteStats)
