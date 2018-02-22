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

const LightBoxUser = asyncComponent(() => import("../LightBoxUser"))
const LightBoxRole = asyncComponent(() => import("../LightBoxRole"))
const LightBoxResume = asyncComponent(() => import("../LightBoxResume"))
const LightBoxNotification = asyncComponent(() => import("../LightBoxNotification"))
const LightBoxComment = asyncComponent(() => import("../LightBoxComment"))
const LightBoxMedium = asyncComponent(() => import("../LightBoxMedium"))
const LightBoxManga = asyncComponent(() => import("../LightBoxManga"))
const LightBoxEditResource = asyncComponent(() => import("../LightBoxEditResource"))
const LightBoxNewResource = asyncComponent(() => import("../LightBoxNewResource"))

class AuthedLightBox extends Component {
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
            {// ORDER MATTERS:: MUST BE NEW THEN :id THEN edit
            }
            <Route exact path="/graphics/new">
              <LightBoxNewResource locationToPush="/graphics" location={location}/>
            </Route>
            <Route exact path="/graphics/:id">
              <LightBoxGraphic locationToPush="/graphics" location={location}/>
            </Route>
            <Route exact path="/graphics/:id/edit">
              <LightBoxEditResource locationToPush="/graphics" location={location}/>
            </Route>

            <Route exact path="/posts/new">
              <LightBoxNewResource locationToPush="/posts" location={location}/>
            </Route>
            <Route exact path="/posts/:id">
              <LightBoxPost locationToPush="/posts" location={location}/>
            </Route>
            <Route exact path="/posts/:id/edit">
              <LightBoxEditResource locationToPush="/posts" location={location}/>
            </Route>

            <Route exact path="/projects/new">
              <LightBoxNewResource locationToPush="/projects" location={location}/>
            </Route>
            <Route exact path="/projects/:id">
              <LightBoxProject locationToPush="/projects" location={location}/>
            </Route>
            <Route exact path="/projects/:id/edit">
              <LightBoxEditResource locationToPush="/projects" location={location}/>
            </Route>

            <Route exact path="/users/new">
              <LightBoxNewResource locationToPush="/users" location={location}/>
            </Route>
            <Route exact path="/users/:id">
              <LightBoxUser locationToPush="/users" location={location}/>
            </Route>
            <Route exact path="/users/:id/edit">
              <LightBoxEditResource locationToPush="/users" location={location}/>
            </Route>

            <Route exact path="/resumes/new">
              <LightBoxNewResource locationToPush="/resumes" location={location}/>
            </Route>
            <Route exact path="/resumes/:id">
              <LightBoxResume locationToPush="/resumes" location={location}/>
            </Route>
            <Route exact path="/resumes/:id/edit">
              <LightBoxEditResource locationToPush="/resumes" location={location}/>
            </Route>

            <Route exact path="/roles/new">
              <LightBoxNewResource locationToPush="/roles" location={location}/>
            </Route>
            <Route exact path="/roles/:id">
              <LightBoxRole locationToPush="/roles" location={location}/>
            </Route>
            <Route exact path="/roles/:id/edit">
              <LightBoxEditResource locationToPush="/roles" location={location}/>
            </Route>

            <Route exact path="/notifications/new">
              <LightBoxNewResource locationToPush="/notifications" location={location}/>
            </Route>
            <Route exact path="/notifications/:id">
              <LightBoxNotification locationToPush="/notifications" location={location}/>
            </Route>
            <Route exact path="/notifications/:id/edit">
              <LightBoxEditResource locationToPush="/notifications" location={location}/>
            </Route>

            <Route exact path="/comments/new">
              <LightBoxNewResource locationToPush="/comments" location={location}/>
            </Route>
            <Route exact path="/comments/:id">
              <LightBoxComment locationToPush="/comments" location={location}/>
            </Route>
            <Route exact path="/comments/:id/edit">
              <LightBoxEditResource locationToPush="/comments" location={location}/>
            </Route>

            <Route exact path="/media/new">
              <LightBoxNewResource locationToPush="/media" location={location}/>
            </Route>
            <Route exact path="/media/:id">
              <LightBoxMedium locationToPush="/media" location={location}/>
            </Route>
            <Route exact path="/media/:id/edit">
              <LightBoxEditResource locationToPush="/media" location={location}/>
            </Route>
            <Route exact path="/media/:id/show_image">
              <LightBoxShowMedium locationToPush="/media" location={location}/>
            </Route>
            <Route exact path="/media/:id/show_download">
              <LightBoxShowMedium locationToPush="/media" location={location}/>
            </Route>

            <Route exact path="/mangas/new">
              <LightBoxNewResource locationToPush="/mangas" location={location}/>
            </Route>
            <Route exact path="/mangas/:id">
              <LightBoxManga locationToPush="/mangas" location={location}/>
            </Route>
            <Route exact path="/mangas/:id/edit">
              <LightBoxEditResource locationToPush="/mangas" location={location}/>
            </Route>

            <Route exact path="/manga_gallery/:id">
              <LightBoxManga locationToPush="/manga_gallery" location={location}/>
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

export default AuthedLightBox
