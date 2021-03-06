import React, { Component } from 'react'
import ReactCSSTransitionReplace from 'react-css-transition-replace'
import { Switch, Route } from 'react-router-dom'

import asyncComponent from 'hocs/AsyncComponent'

const LightBoxShowResource = asyncComponent(() => import("containers/lightbox/LightBoxShowResource"))

const LightBoxGeneric = asyncComponent(() => import("containers/lightbox/LightBoxGeneric"))
const LightBoxShowMedium = asyncComponent(() => import("containers/lightbox/LightBoxShowMedium"))

const LightBoxEditResource = asyncComponent(() => import("containers/lightbox/LightBoxEditResource"))
const LightBoxNewResource = asyncComponent(() => import("containers/lightbox/LightBoxNewResource"))
const LightBoxVisit = asyncComponent(() => import("containers/lightbox/LightBoxVisit"))

const LightBoxSearch = asyncComponent(() => import("containers/lightbox/LightBoxSearch"))
const LightBoxSiteStats = asyncComponent(() => import("containers/lightbox/LightBoxSiteStats"))
const LightBoxUserActivity = asyncComponent(() => import("containers/lightbox/LightBoxUserActivity"))

const LightBoxSolarSystem = asyncComponent(() => import("containers/lightbox/LightBoxSolarSystem"))

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
            <Route exact path="/search">
              <LightBoxSearch location={location}/>
            </Route>
            <Route exact path="/graphics/new">
              <LightBoxNewResource locationToPush="/graphics" location={location}/>
            </Route>
            <Route exact path="/graphics/:id">
              <LightBoxShowResource
                hasComments
                fullscreenable
                resourceType='graphic'
                resourcePlural='graphics'
                location={location}
              />
            </Route>
            <Route exact path="/graphics/:id/edit">
              <LightBoxEditResource locationToPush="/graphics" location={location}/>
            </Route>

            <Route exact path="/posts/new">
              <LightBoxNewResource locationToPush="/posts" location={location}/>
            </Route>
            <Route exact path="/posts/:id">
              <LightBoxShowResource
                hasComments
                resourceType='post'
                resourcePlural='posts'
                location={location}
              />
            </Route>
            <Route exact path="/posts/:id/edit">
              <LightBoxEditResource locationToPush="/posts" location={location}/>
            </Route>

            <Route exact path="/projects/new">
              <LightBoxNewResource locationToPush="/projects" location={location}/>
            </Route>
            <Route exact path="/projects/:id">
              <LightBoxShowResource
                hasComments
                resourceType='project'
                resourcePlural='projects'
                location={location}
              />
            </Route>
            <Route exact path="/projects/:id/edit">
              <LightBoxEditResource locationToPush="/projects" location={location}/>
            </Route>

            <Route exact path="/users/new">
              <LightBoxNewResource locationToPush="/users" location={location}/>
            </Route>
            <Route exact path="/users/:id">
              <LightBoxShowResource
                resourceType='user'
                resourcePlural='users'
                location={location}
              />
            </Route>
            <Route exact path="/users/:id/edit">
              <LightBoxEditResource locationToPush="/users" location={location}/>
            </Route>
            <Route exact path="/users/:id/activity">
              <LightBoxUserActivity location={location}/>
            </Route>

            <Route exact path="/resumes/new">
              <LightBoxNewResource locationToPush="/resumes" location={location}/>
            </Route>
            <Route exact path="/resumes/:id">
              <LightBoxShowResource
                resourceType='resume'
                resourcePlural='resumes'
                location={location}
              />
            </Route>
            <Route exact path="/resumes/:id/edit">
              <LightBoxEditResource locationToPush="/resumes" location={location}/>
            </Route>

            <Route exact path="/roles/new">
              <LightBoxNewResource locationToPush="/roles" location={location}/>
            </Route>
            <Route exact path="/roles/:id">
              <LightBoxShowResource
                resourceType='role'
                resourcePlural='roles'
                location={location}
              />
            </Route>
            <Route exact path="/roles/:id/edit">
              <LightBoxEditResource locationToPush="/roles" location={location}/>
            </Route>

            <Route exact path="/notifications/new">
              <LightBoxNewResource locationToPush="/notifications" location={location}/>
            </Route>
            <Route exact path="/notifications/:id">
              <LightBoxShowResource
                resourceType='notification'
                resourcePlural='notifications'
                location={location}
              />
            </Route>
            <Route exact path="/notifications/:id/edit">
              <LightBoxEditResource locationToPush="/notifications" location={location}/>
            </Route>

            <Route exact path="/comments/new">
              <LightBoxNewResource locationToPush="/comments" location={location}/>
            </Route>
            <Route exact path="/comments/:id">
              <LightBoxShowResource
                resourceType='comment'
                resourcePlural='comments'
                location={location}
              />
            </Route>
            <Route exact path="/comments/:id/edit">
              <LightBoxEditResource locationToPush="/comments" location={location}/>
            </Route>

            <Route exact path="/media/new">
              <LightBoxNewResource locationToPush="/media" location={location}/>
            </Route>
            <Route exact path="/media/:id">
              <LightBoxShowResource
                resourceType='medium'
                resourcePlural='media'
                location={location}
              />
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
              <LightBoxShowResource
                hasComments
                resourceType='manga'
                resourcePlural='mangas'
                location={location}
              />
            </Route>
            <Route exact path="/mangas/:id/edit">
              <LightBoxEditResource locationToPush="/mangas" location={location}/>
            </Route>

            <Route exact path="/manga_gallery/:id">
              <LightBoxShowResource
                hasComments
                resourceType='manga'
                resourcePlural='mangas'
                locationToPush='/manga_gallery'
                location={location}
              />
            </Route>

            <Route exact path ="/visits/:id">
              <LightBoxVisit locationToPush="/visits" location={location}/>
            </Route>

            <Route path="/google_maps_location">
              <LightBoxGeneric mode="currentLocation" locationToPush="/contact" />
            </Route>

            <Route path="/site_stats">
              <LightBoxSiteStats locationToPush="/" location={location}/>
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

export default AuthedLightBox
