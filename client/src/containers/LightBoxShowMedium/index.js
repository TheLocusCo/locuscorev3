import React, { Component } from 'react'
import './style.css'
import LightBoxShowMediumContent from '../../components/LightBoxShowMediumContent'
import LightBoxErrorPage from '../../components/LightBoxErrorPage'
import { connect } from "react-redux"
import { fetchShowMedium, toggleFullscreenLightBox } from "../../redux/actions"
import { Route } from 'react-router-dom'

class LightBoxShowMedium extends Component {
  componentWillMount() {
    var id = this.props.location.pathname.split("/").reverse()[1]
    var type = this.props.location.pathname.split("/").reverse()[0]
    this.props.dispatch(fetchShowMedium(id, type))
  }

  parseFullscreenClass(fullscreen) {
    return ("ltbx-content" + (fullscreen ? " ltbx-fullscreen-content" : ""))
  }

  render() {
    const { object, isFetching, errorContent, location, locationToPush, showAsFullscreen } = this.props
    return (
      <Route render={({history}) => (
        <div className="ltbx-wrap" tabIndex="-1">
          <div className="ltbx-container">
            <div className={this.parseFullscreenClass(showAsFullscreen)}>
                {isFetching && !object.id && <h1 className="section-heading larger">Loading...</h1>}
                {errorContent.length > 0 &&
                  <LightBoxErrorPage errorContent={errorContent}/>
                }
                {object.id &&
                  <LightBoxShowMediumContent {...object} location={location}/>
                }
                <button onClick={() => history.push(locationToPush)} title="Close (Esc)" type="button" className="ltbx-close">×</button>
                <button onClick={() => history.go(-1)} title="Go back to the previous page" type="button" className="ltbx-close ltbx-back"><i className="icon-back"/></button>
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
  object: state.medium.content,
  errorContent: state.errorMessages.items,
  isFetching: state.post.isFetching,
  showAsFullscreen: state.lightbox.showAsFullscreen
})

export default connect(mapStateToProps)(LightBoxShowMedium)
