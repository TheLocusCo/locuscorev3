import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

import LightBoxSearchQueryBuilder from 'containers/lightbox/LightBoxSearchQueryBuilder'

import { fetchSearchAbility, deleteCurrentSearchAndResetTree } from 'redux/actions'

class LightBoxSearch extends Component {
  componentWillMount() {
    if(this.props.needsUpdate || this.props.currentUser) {
      this.props.dispatch(fetchSearchAbility(this.props.currentUserId))
    }
  }

  render() {
    const { isFetching, location, searchAbility } = this.props
    return (
      <Route render={({history}) => (
        <div className="ltbx-wrap" tabIndex="-1">
          <div className="ltbx-container">
            <div className="ltbx-content">
              {isFetching && <h1 className="section-heading larger">Loading...</h1>}
              {!searchAbility.isFetching &&
                <LightBoxSearchQueryBuilder searchAbility={searchAbility} location={location}/>
              }
              <button
                onClick={() => this.props.dispatch(deleteCurrentSearchAndResetTree())}
                title="Reset Search Options"
                type="button"
                className="ltbx-close ltbx-back">
                <i className="icon-arrows-ccw"/>
              </button>
              <button
                onClick={() => history.go(-1)}
                title="Close and Go Back (Esc)"
                type="button"
                className="ltbx-close">
                <i className="icon-back"/>
              </button>
            </div>
          </div>
          <div className="ltbx-bg" onClick={() => history.go(-1)} />
        </div>
      )}/>
    )
  }
}

// history should SET THE CURRENT VALUE so going back works correctly after user navigates some searches

const mapStateToProps = state => ({
  searchAbility: state.searchAbility.filteredTree,
  isFetching: state.searchAbility.isFetching,
  currentUserId: state.currentUser.id,
  needsUpdate: state.searchAbility.needsUpdate
})

export default connect(mapStateToProps)(LightBoxSearch)
