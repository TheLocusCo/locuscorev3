import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

import { fetchSiteStatsSuperVisit } from 'redux/actions'

import ThemedDashboard from 'containers/ThemedDashboard'
import EventDashboard from 'containers/EventDashboard'
import Ticker from 'containers/Ticker'
import Footer from 'components/styled/Footer'

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
                  <Ticker />
                  <Footer>
                    {window.innerWidth > 816 &&
                      <a
                        href="https://github.com/TheLocusCo/locuscorev3/tree/master/client/src/components/charts/BarChart.js"
                        target='_blank'
                        rel="noopener noreferrer">
                        <i style={{marginRight: '10px'}} className="icon-github" />
                        View Source on Github
                        <i style={{marginLeft: '10px'}} className="icon-github" />
                      </a>
                    }
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
