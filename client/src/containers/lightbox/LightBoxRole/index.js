import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

import LightBoxRoleContent from 'components/lightbox/LightBoxRoleContent'
import SuccessBlock from 'containers/SuccessBlock'
import LightBoxErrorPage from 'components/lightbox/LightBoxErrorPage'
import { fetchResource } from 'redux/actions'

class LightBoxRole extends Component {
  componentWillMount() {
    var id = this.props.location.pathname.split("/").reverse()[0]
    this.props.dispatch(fetchResource('role', 'roles', id))
  }

  render() {
    return (
      <Route render={({history}) => (
        <div className="ltbx-wrap" tabIndex="-1">
          <div className="ltbx-container">
            <div className="ltbx-content">
              <SuccessBlock content={this.props.successContent}/>
              {this.props.isFetching && !this.props.role.id && <h1 className="section-heading larger">Loading...</h1>}
              {this.props.errorContent.length > 0 &&
                <LightBoxErrorPage errorContent={this.props.errorContent}/>
              }
              {this.props.role.id &&
                <LightBoxRoleContent {...this.props.role} location={this.props.location}/>
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
  role: state.role.content,
  successContent: state.successMessages.items,
  errorContent: state.errorMessages.items,
  isFetching: state.post.isFetching
})

export default connect(mapStateToProps)(LightBoxRole)
