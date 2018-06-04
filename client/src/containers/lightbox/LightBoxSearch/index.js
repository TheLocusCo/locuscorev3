import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

import LightBoxSearchQueryBuilder from 'containers/lightbox/LightBoxSearchQueryBuilder'

import { fetchSearchAbility, deleteCurrentSearch } from 'redux/actions'

class LightBoxSearch extends Component {
  componentWillMount() {
    this.props.dispatch(fetchSearchAbility(this.props.currentUserId))
  }

  render() {
    const { isFetching, location, searchAbility } = this.props
    return (
      <Route render={({history}) => (
        <div className="ltbx-wrap" tabIndex="-1">
          <div className="ltbx-container">
            <div className="ltbx-content">
              {isFetching && <h1 className="section-heading larger">Loading...</h1>}
              {searchAbility.graphics &&
                <LightBoxSearchQueryBuilder searchAbility={searchAbility} location={location}/>
              }
              <button onClick={() => this.props.dispatch(deleteCurrentSearch())} title="Reset Search Options" type="button" className="ltbx-close ltbx-back"><i className="icon-arrows-ccw"/></button>
              <button onClick={() => history.go(-1)} title="Close and Go Back (Esc)" type="button" className="ltbx-close"><i className="icon-back"/></button>
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
  searchAbility: state.searchAbility.tree,
  isFetching: state.post.isFetching,
  currentUserId: state.currentUser.id
})

export default connect(mapStateToProps)(LightBoxSearch)
