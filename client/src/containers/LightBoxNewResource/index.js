import React, { Component } from 'react'
import './style.css'
import LightBoxNewForm from '../../components/LightBoxNewForm'
import { connect } from "react-redux"
import { fetchNewResource, deleteNewItem, fetchCategories, fetchResources } from "../../redux/actions"
import { Route } from 'react-router-dom'

class LightBoxNewResource extends Component {
  componentWillMount() {
    var resource = this.props.location.pathname.split("/").reverse()[1]
    this.props.dispatch(fetchNewResource(resource))
    this.props.dispatch(fetchCategories("all"))
    this.props.dispatch(fetchResources('media', 0, '', 'all'))
  }

  pushHistoryAndClearNew(history) {
    this.props.dispatch(deleteNewItem())
    history.push(this.props.locationToPush)
  }

  render() {
    const { isFetching, newItem, location, errorContent, categories, media } = this.props
    return (
      <Route render={({history}) => (
        <div className="ltbx-wrap" tabIndex="-1">
          <div className="ltbx-container">
            <div className="ltbx-content">
              {isFetching && !newItem.field_meta && <div className="box-dark"><h1 className="section-heading larger">Loading...</h1></div>}
              {newItem.field_meta &&
                <LightBoxNewForm {...newItem} history={history} location={location} errorContent={errorContent} categories={categories} media={media} />
              }
              <button onClick={() => this.pushHistoryAndClearNew(history)} title="Close (Esc)" type="button" className="ltbx-close">×</button>
            </div>
          </div>
          <div className="ltbx-bg" onClick={() => this.pushHistoryAndClearNew(history)} />
        </div>
      )}/>
    )
  }
}

const mapStateToProps = state => ({
  newItem: state.newItem.content,
  errorContent: state.errorMessages.items,
  categories: state.categories.items,
  media: state.media.items,
  isFetching: state.newItem.isFetching
})

export default connect(mapStateToProps)(LightBoxNewResource)
