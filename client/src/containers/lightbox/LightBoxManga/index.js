import React, { Component } from 'react'
import './style.css'
import LightBoxMangaContent from '../../../components/lightbox/LightBoxMangaContent'
import SuccessBlock from '../../SuccessBlock'
import LightBoxComments from '../LightBoxComments'
import LightBoxErrorPage from '../../../components/lightbox/LightBoxErrorPage'
import { connect } from "react-redux"
import { fetchResource } from "../../../redux/actions"
import { Route } from 'react-router-dom'

class LightBoxManga extends Component {
  componentWillMount() {
    var id = this.props.location.pathname.split("/").reverse()[0]
    this.props.dispatch(fetchResource('manga', 'mangas', id))
  }

  render() {
    const { object, isFetching, errorContent, location, successContent, locationToPush } = this.props
    return (
      <Route render={({history}) => (
        <div className="ltbx-wrap" tabIndex="-1">
          <div className="ltbx-container">
            <div className="ltbx-content">
              <SuccessBlock content={successContent}/>
              {isFetching && !object.id && <h1 className="section-heading larger">Loading...</h1>}
              {errorContent.length > 0 &&
                <LightBoxErrorPage errorContent={errorContent}/>
              }
              {object.id &&
                <LightBoxMangaContent {...object} location={location}/>
              }
              {this.props.object.id &&
                <LightBoxComments comments={object.comments} resourceType={object.field_meta.resource_type} resourceId={object.id} successContent={successContent}/>
              }
              <button onClick={() => history.push(locationToPush)} title="Close (Esc)" type="button" className="ltbx-close">×</button>
            </div>
          </div>
          <div className="ltbx-bg" onClick={() => history.push(locationToPush)} />
        </div>
      )}/>
    )
  }
}

const mapStateToProps = state => ({
  object: state.manga.content,
  errorContent: state.errorMessages.items,
  successContent: state.successMessages.items,
  isFetching: state.manga.isFetching
})

export default connect(mapStateToProps)(LightBoxManga)