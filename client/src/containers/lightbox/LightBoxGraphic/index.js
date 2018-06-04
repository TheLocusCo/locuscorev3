import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

import LightBoxGraphicContent from 'components/lightbox/LightBoxGraphicContent'
import SuccessBlock from 'containers/SuccessBlock'
import LightBoxComments from 'containers/lightbox/LightBoxComments'
import LightBoxErrorPage from 'components/lightbox/LightBoxErrorPage'

import { fetchResource, toggleFullscreenLightBox } from 'redux/actions'

class LightBoxGraphic extends Component {
  componentWillMount() {
    var id = this.props.location.pathname.split("/").reverse()[0]
    this.props.dispatch(fetchResource('graphic', 'graphics', id))
  }

  parseFullscreenClass(fullscreen) {
    return ("ltbx-content" + (fullscreen ? " ltbx-fullscreen-content" : ""))
  }

  render() {
    const { object, isFetching, errorContent, location, successContent, locationToPush, showAsFullscreen } = this.props
    return (
      <Route render={({history}) => (
        <div className="ltbx-wrap" tabIndex="-1">
          <div className="ltbx-container">
            <div className={this.parseFullscreenClass(showAsFullscreen)}>
              <SuccessBlock content={successContent}/>
              {isFetching && !object.id && <h1 className="section-heading larger">Loading...</h1>}
              {errorContent.length > 0 &&
                <LightBoxErrorPage errorContent={errorContent}/>
              }
              {object.id &&
                <LightBoxGraphicContent {...object} location={location} fullscreen={showAsFullscreen}/>
              }
              {this.props.object.id &&
                <LightBoxComments comments={object.comments} resourceType={object.field_meta.resource_type} resourceId={object.id} successContent={successContent}/>
              }
              <button onClick={() => history.push(locationToPush)} title="Close (Esc)" type="button" className="ltbx-close">×</button>
              <button onClick={() => this.props.dispatch(toggleFullscreenLightBox())} title="Fullscreen" type="button" className="ltbx-fullscreen"><i className="icon-resize-full"></i></button>
            </div>
          </div>
          <div className="ltbx-bg" onClick={() => history.push(locationToPush)} />
        </div>
      )}/>
    )
  }
}

const mapStateToProps = state => ({
  object: state.graphic.content,
  errorContent: state.errorMessages.items,
  successContent: state.successMessages.items,
  isFetching: state.post.isFetching,
  showAsFullscreen: state.lightbox.showAsFullscreen
})

export default connect(mapStateToProps)(LightBoxGraphic)
