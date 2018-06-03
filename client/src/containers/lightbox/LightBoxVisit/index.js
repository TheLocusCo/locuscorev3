import React, { Component } from 'react'
import { connect } from "react-redux"
import { Route } from 'react-router-dom'

import SuccessBlock from '../../SuccessBlock'
import LightBoxErrorPage from '../../../components/lightbox/LightBoxErrorPage'
import LightBoxVisitContent from '../../../components/lightbox/LightBoxVisitContent'
import { fetchResource } from "../../../redux/actions"

import ThemedDashboard from '../../ThemedDashboard'
import EventDashboard from '../../EventDashboard'
import Ticker from '../../Ticker'
import Footer from '../../../components/styled/Footer'

class LightBoxVisit extends Component {
  componentWillMount() {
    var id = this.props.location.pathname.split("/").reverse()[0]
    this.props.dispatch(fetchResource('visit', 'visits', id))
  }

  render() {
    return (
      <Route render={({history}) => (
        <div className="ltbx-wrap" tabIndex="-1">
          <div className="ltbx-container">
            <div className="ltbx-content ltbx-fullscreen-content">
              <SuccessBlock content={this.props.successContent}/>
              {this.props.isFetching && !this.props.visit.id && <h1 className="section-heading larger">Loading...</h1>}
              {this.props.errorContent.length > 0 &&
                <LightBoxErrorPage errorContent={this.props.errorContent}/>
              }
              {this.props.visit.id &&
                <LightBoxVisitContent {...this.props.visit} location={this.props.location}/>
              }
              {this.props.visit.id &&
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
  successContent: state.successMessages.items,
  errorContent: state.errorMessages.items,
  isFetching: state.visit.isFetching
})

export default connect(mapStateToProps)(LightBoxVisit)
