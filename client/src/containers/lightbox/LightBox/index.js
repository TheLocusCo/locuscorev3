import React, { Component } from 'react'
import ReactCSSTransitionReplace from 'react-css-transition-replace'
import { Switch, Route } from 'react-router-dom'

import asyncComponent from "containers/AsyncComponent"

const LightBoxPost = asyncComponent(() => import("containers/lightbox/LightBoxPost"))
const LightBoxProject = asyncComponent(() => import("containers/lightbox/LightBoxProject"))
const LightBoxGraphic = asyncComponent(() => import("containers/lightbox/LightBoxGraphic"))
const LightBoxGeneric = asyncComponent(() => import("containers/lightbox/LightBoxGeneric"))
const LightBoxShowMedium = asyncComponent(() => import("../LightBoxShowMedium"))
const EmptyPage = asyncComponent(() => import("components/EmptyPage"))

const LightBoxSearch = asyncComponent(() => import("containers/lightbox/LightBoxSearch"))
const LightBoxSiteStats = asyncComponent(() => import("containers/lightbox/LightBoxSiteStats"))

class LightBox extends Component {
  render() {
    return (
      <ReactCSSTransitionReplace
        transitionName="cross-fade"
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={1000}
      >
        <div key={this.props.location.pathname}>
          <Switch location={this.props.location}>
            {// Prevent new route paths from muddling up the authenticated part of the site (this gets parsed first)
            }
            <Route exact path="/search">
              <LightBoxSearch location={this.props.location}/>
            </Route>
            <Route exact path="/posts/new" component={EmptyPage} />
            <Route exact path="/projects/new" component={EmptyPage} />
            <Route exact path="/graphics/new" component={EmptyPage} />
            <Route exact path="/posts/:id">
              <LightBoxPost locationToPush="/blog" location={this.props.location}/>
            </Route>
            <Route exact path="/projects/:id">
              <LightBoxProject locationToPush="/portfolio" location={this.props.location}/>
            </Route>
            <Route exact path="/graphics/:id">
              <LightBoxGraphic locationToPush="/graphics_welcome" location={this.props.location}/>
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
          </Switch>
        </div>
      </ReactCSSTransitionReplace>
    )
  }
}

export default LightBox
