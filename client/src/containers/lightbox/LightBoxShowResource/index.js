import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

import SuccessBlock from 'containers/iterators/SuccessBlock'
import LightBoxErrorPage from 'components/lightbox/LightBoxErrorPage'
import { fetchResource, toggleFullscreenLightBox, deleteUploadItem, clearCachedGraphic } from 'redux/actions'
import { humanize } from 'utils/string'
import asyncComponent from 'hocs/AsyncComponent'

const LightBoxPostContent = asyncComponent(() => import('components/lightbox/LightBoxPostContent'))
const LightBoxComments = asyncComponent(() => import('containers/lightbox/LightBoxComments'))
const LightBoxProjectContent = asyncComponent(() => import('components/lightbox/LightBoxProjectContent'))
const LightBoxGraphicContent = asyncComponent(() => import('components/lightbox/LightBoxGraphicContent'))
const LightBoxUserProfile = asyncComponent(() => import('components/lightbox/LightBoxUserProfile'))
const LightBoxResumeContent = asyncComponent(() => import('components/lightbox/LightBoxResumeContent'))
const LightBoxRoleContent = asyncComponent(() => import('components/lightbox/LightBoxRoleContent'))
const LightBoxNotificationContent = asyncComponent(() => import('components/lightbox/LightBoxNotificationContent'))
const LightBoxCommentContent = asyncComponent(() => import('components/lightbox/LightBoxCommentContent'))
const LightBoxMediumContent = asyncComponent(() => import('components/lightbox/LightBoxMediumContent'))
const LightBoxMangaContent = asyncComponent(() => import('components/lightbox/LightBoxMangaContent'))

class LightBoxResource extends Component {
  componentWillMount() {
    var id = this.props.location.pathname.split("/").reverse()[0]
    this.props.dispatch(fetchResource(this.props.resourceType, this.props.resourcePlural, id))
  }

  componentWillUnmount() {
    if(this.props.resourceType === 'medium') {
      this.props.dispatch(deleteUploadItem())
    }

    if(this.props.resourceType === 'graphic') {
      this.props.dispatch(clearCachedGraphic())
    }
  }

  resourceComponent(object, location, resourceType, showAsFullscreen) {
    switch (resourceType) {
      case 'comment':
        return (
          <article className="portfolio-item">
            <h4 className="section-heading">Owned By {humanize(object.commentable_type)}: {object.owned_by}</h4>
            <div className="box-dark" style={{marginTop: "30px", paddingTop: "47px"}}>
              <LightBoxCommentContent {...object} location={location} currentUser={this.props.currentUser}/>
            </div>
          </article>
        )
      case 'graphic':
        return <LightBoxGraphicContent {...object} location={location} fullscreen={showAsFullscreen}/>
      case 'manga':
        return <LightBoxMangaContent {...object} location={location}/>
      case 'medium':
        return <LightBoxMediumContent {...object} location={location}/>
      case 'notification':
        return <LightBoxNotificationContent {...object} location={location}/>
      case 'post':
        return <LightBoxPostContent {...object} location={location}/>
      case 'project':
        return <LightBoxProjectContent {...object} location={location}/>
      case 'resume':
        return <LightBoxResumeContent {...object} location={location}/>
      case 'role':
        return <LightBoxRoleContent {...object} location={location}/>
      case 'user':
        return <LightBoxUserProfile {...object} location={location}/>
      default:
        return null
    }
  }

  targetLocationToPush(history, location, locationToPush) {
    if (location.search === "?profile=true") {
      history.goBack()
    } else {
      history.push(locationToPush)
    }
  }

  parseFullscreenClass(fullscreen) {
    return ("ltbx-content" + (fullscreen ? " ltbx-fullscreen-content" : ""))
  }

  render() {
    const {
      object,
      isFetching,
      errorContent,
      location,
      successContent,
      resourceType,
      resourcePlural,
      hasComments,
      showAsFullscreen,
      fullscreenable,
      locationToPush
    } = this.props
    return (
      <Route render={({history}) => (
        <div className="ltbx-wrap" tabIndex="-1">
          <div className="ltbx-container">
            <div className={this.parseFullscreenClass(showAsFullscreen)}>
              <SuccessBlock content={successContent}/>
              {isFetching && !object.id &&
                <h1 className="section-heading larger">
                  Loading {resourceType}...
                </h1>
              }
              {errorContent.length > 0 &&
                <LightBoxErrorPage errorContent={errorContent}/>
              }
              {object.id &&
                this.resourceComponent(object, location, resourceType, showAsFullscreen)
              }
              {hasComments && this.props.object.id &&
                <LightBoxComments
                  comments={object.comments}
                  resourceType={object.field_meta.resource_type}
                  resourceId={object.id}
                  successContent={successContent}
                />
              }
              <button
                onClick={() => history.go(-1)}
                title="Go back to the previous page"
                type="button"
                className="ltbx-close ltbx-back">
                <i className="icon-back"/>
              </button>
              <button
                onClick={() => this.targetLocationToPush(history, location, (locationToPush ? locationToPush : `/${resourcePlural}`))}
                title="Close (Esc)"
                type="button"
                className="ltbx-close">
                ×
              </button>
              {fullscreenable && object.content && !object.content.fullscreen_by_default &&
                <button
                  onClick={() => this.props.dispatch(toggleFullscreenLightBox())}
                  title="Fullscreen"
                  type="button"
                  className="ltbx-fullscreen">
                  <i className="icon-resize-full"/>
                </button>
              }
            </div>
          </div>
          <div
            className="ltbx-bg"
            onClick={() => this.targetLocationToPush(history, location, (locationToPush ? locationToPush : `/${resourcePlural}`))}
          />
        </div>
      )}/>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  object: state[`${ownProps.resourceType}`].content,
  errorContent: state.errorMessages.items,
  successContent: state.successMessages.items,
  isFetching: state[`${ownProps.resourceType}`].isFetching,
  showAsFullscreen: (state[`${ownProps.resourceType}`].content.fullscreen_by_default ? true : state.lightbox.showAsFullscreen),
  currentUser: state.currentUser
})

export default connect(mapStateToProps)(LightBoxResource)
