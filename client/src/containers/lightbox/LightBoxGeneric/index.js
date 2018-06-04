import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import LightBoxGenericContent from 'components/lightbox/LightBoxGenericContent'

class LightBoxGeneric extends Component {
  render() {
    return (
      <Route render={({history}) => (
        <div className="ltbx-wrap" tabIndex="-1">
          <div className="ltbx-container">
            <div className="ltbx-content">
              <LightBoxGenericContent {...this.props} location={this.props.location}/>
              <button onClick={() => history.push(this.props.locationToPush)} title="Close (Esc)" type="button" className="ltbx-close">×</button>
            </div>
          </div>
          <div className="ltbx-bg" onClick={() => history.push(this.props.locationToPush)} />
        </div>
      )}/>
    )
  }
}

export default LightBoxGeneric
