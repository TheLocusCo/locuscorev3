import React, { Component } from 'react'
import './style.css'
import ReactCSSTransitionReplace from 'react-css-transition-replace'
import { Switch, Route } from 'react-router-dom'

import asyncComponent from "../AsyncComponent"

const LightBoxPost = asyncComponent(() => import("../LightBoxPost"))
const LightBoxProject = asyncComponent(() => import("../LightBoxProject"))
const LightBoxGraphic = asyncComponent(() => import("../LightBoxGraphic"))
const LightBoxGeneric = asyncComponent(() => import("../LightBoxGeneric"))
const LightBoxShowMedium = asyncComponent(() => import("../LightBoxShowMedium"))
const EmptyPage = asyncComponent(() => import("../../components/EmptyPage"))

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
          </Switch>
        </div>
      </ReactCSSTransitionReplace>
    )
  }
}

export default LightBox
