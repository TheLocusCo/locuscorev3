import React, { Component } from 'react'
import './style.css'
import LightBoxEditForm from '../../components/LightBoxEditForm'
import { connect } from "react-redux"
import { fetchResource, deleteEditItem, fetchCategories, fetchMedia } from "../../redux/actions"
import { Route } from 'react-router-dom'

class LightBoxEditResource extends Component {
  componentWillMount() {
    var id = this.props.location.pathname.split("/").reverse()[1]
    var resource = this.props.location.pathname.split("/").reverse()[2]
    this.props.dispatch(fetchResource(resource, id))
    this.props.dispatch(fetchCategories("all"))
    this.props.dispatch(fetchMedia("all", 0))
  }

  pushHistoryAndClearEdit(history) {
    this.props.dispatch(deleteEditItem())
    history.push(this.props.locationToPush)
  }

  render() {
    const { isFetching, editItem, location, errorContent, categories, media } = this.props
    return (
      <Route render={({history}) => (
        <div className="ltbx-wrap" tabIndex="-1">
          <div className="ltbx-container">
            <div className="ltbx-content">
              {isFetching && !editItem.id && <div className="box-dark"><h1 className="section-heading larger">Loading...</h1></div>}
              {editItem.id &&
                <LightBoxEditForm {...editItem} history={history} location={location} errorContent={errorContent} categories={categories} media={media}/>
              }
              <button onClick={() => this.pushHistoryAndClearEdit(history)} title="Close (Esc)" type="button" className="ltbx-close">×</button>
            </div>
          </div>
          <div className="ltbx-bg" onClick={() => this.pushHistoryAndClearEdit(history)} />
        </div>
      )}/>
    )
  }
}

const mapStateToProps = state => ({
  editItem: state.editItem.content,
  errorContent: state.errorMessages.items,
  categories: state.categories.items,
  media: state.media.items,
  isFetching: state.editItem.isFetching
})

export default connect(mapStateToProps)(LightBoxEditResource)
