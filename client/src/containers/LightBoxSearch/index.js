import React, { Component } from 'react'
import './style.css'
import LightBoxSearchQueryBuilder from '../LightBoxSearchQueryBuilder'
import SuccessBlock from '../SuccessBlock'
import LightBoxErrorPage from '../../components/LightBoxErrorPage'
import { connect } from "react-redux"
import { fetchSearchAbility } from "../../redux/actions"
import { Route } from 'react-router-dom'

class LightBoxSearch extends Component {
  componentWillMount() {
    this.props.dispatch(fetchSearchAbility(this.props.currentUserId))
  }

  render() {
    const { isFetching, errorContent, location, successContent, searchAbility } = this.props
    return (
      <Route render={({history}) => (
        <div className="ltbx-wrap" tabIndex="-1">
          <div className="ltbx-container">
            <div className="ltbx-content">
              <SuccessBlock content={successContent}/>
              {isFetching && <h1 className="section-heading larger">Loading...</h1>}
              {errorContent.length > 0 &&
                <LightBoxErrorPage errorContent={errorContent}/>
              }
              {searchAbility.graphics &&
                <LightBoxSearchQueryBuilder searchAbility={searchAbility} location={location}/>
              }
              <button onClick={() => history.go(-1)} title="Close (Esc)" type="button" className="ltbx-close"><i className="icon-back"/></button>
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
  searchAbility: state.search.searchAbility,
  errorContent: state.errorMessages.items,
  successContent: state.successMessages.items,
  isFetching: state.post.isFetching,
  currentUserId: state.currentUser.id
})

export default connect(mapStateToProps)(LightBoxSearch)
