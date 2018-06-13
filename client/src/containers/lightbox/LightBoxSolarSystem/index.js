import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import SolarSystem from 'components/SolarSystem'

class LightBoxSolarSystem extends Component {
  render() {
    return (
      <Route render={({history}) => (
        <div className="ltbx-wrap" tabIndex="-1">
          <div className="ltbx-container">
            <div className="ltbx-content ltbx-fullscreen-content">
              <SolarSystem/>
              <button
                onClick={() => history.go(-1)}
                title="Go back to the previous page"
                type="button"
                className="ltbx-close ltbx-back">
                <i className="icon-back"/>
              </button>
            </div>
          </div>
          <div className="ltbx-bg" onClick={() => history.push(this.props.locationToPush)} />
        </div>
      )}/>
    )
  }
}

export default LightBoxSolarSystem
