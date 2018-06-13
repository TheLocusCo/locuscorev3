import React, { Component } from 'react'
import ReactCSSTransitionReplace from 'react-css-transition-replace'
import { Switch, Route } from 'react-router-dom'

import asyncComponent from 'hocs/AsyncComponent'

const LightBoxShowResource = asyncComponent(() => import("containers/lightbox/LightBoxShowResource"))
const LightBoxGeneric = asyncComponent(() => import("containers/lightbox/LightBoxGeneric"))
const LightBoxShowMedium = asyncComponent(() => import("../LightBoxShowMedium"))
const EmptyPage = asyncComponent(() => import("components/pages/EmptyPage"))

const LightBoxSearch = asyncComponent(() => import("containers/lightbox/LightBoxSearch"))
const LightBoxSiteStats = asyncComponent(() => import("containers/lightbox/LightBoxSiteStats"))

const LightBoxSolarSystem = asyncComponent(() => import("containers/lightbox/LightBoxSolarSystem"))

class LightBox extends Component {
  render() {
    const { location } = this.props
    return (
      <ReactCSSTransitionReplace
        transitionName="cross-fade"
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={1000}
      >
        <div key={location.pathname}>
          <Switch location={location}>
            {// Prevent new route paths from muddling up the authenticated part of the site (this gets parsed first)
            }
            <Route exact path="/search">
              <LightBoxSearch location={location}/>
            </Route>
            <Route exact path="/posts/new" component={EmptyPage} />
            <Route exact path="/projects/new" component={EmptyPage} />
            <Route exact path="/graphics/new" component={EmptyPage} />
            <Route exact path="/posts/:id">
              <LightBoxShowResource
                hasComments
                resourceType='post'
                resourcePlural='posts'
                locationToPush='/blog'
                location={location}
              />
            </Route>
            <Route exact path="/projects/:id">
              <LightBoxShowResource
                hasComments
                resourceType='project'
                resourcePlural='projects'
                locationToPush='/portfolio'
                location={location}
              />
            </Route>
            <Route exact path="/graphics/:id">
              <LightBoxShowResource
                hasComments
                fullscreenable
                resourceType='graphic'
                resourcePlural='graphics'
                locationToPush='/graphics_welcome'
                location={location}
              />
            </Route>
            <Route exact path="/media/:id/show_image">
              <LightBoxShowMedium locationToPush="/" location={this.props.location}/>
            </Route>
            <Route exact path="/media/:id/show_download">
              <LightBoxShowMedium locationToPush="/" location={this.props.location}/>
            </Route>
            <Route path="/google_maps_location">
              <LightBoxGeneric mode="currentLocation" locationToPush="/contact" />
            </Route>
            <Route path="/site_stats">
              <LightBoxSiteStats locationToPush="/" location={this.props.location}/>
            </Route>
            <Route path="/solar_system">
              <LightBoxSolarSystem locationToPush="/" location={location}/>
            </Route>
          </Switch>
        </div>
      </ReactCSSTransitionReplace>
    )
  }
}

export default LightBox
