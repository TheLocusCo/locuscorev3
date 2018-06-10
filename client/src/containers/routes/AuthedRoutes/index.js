import React, { Component } from 'react'
import ReactCSSTransitionReplace from 'react-css-transition-replace'
import { Switch, Route } from 'react-router-dom'
import Loadable from 'react-loadable'

import Home from "containers/Home"
import AboutMe from "containers/AboutMe"
import WebResume from "containers/WebResume"
import Blog from "containers/Blog"
import Portfolio from "containers/Portfolio"
import Contact from "containers/Contact"
import Login from "containers/Login"
import SearchResults from "containers/SearchResults"
import EmptyPage from "components/EmptyPage"
import UnknownPage from "components/UnknownPage"

const Graphics = Loadable({
  loader: () => import("containers/Graphics"),
  loading: EmptyPage
})

const AuthedGraphics = Loadable({
  loader: () => import("containers/AuthedGraphics"),
  loading: EmptyPage
})

const AuthedPosts = Loadable({
  loader: () => import("containers/AuthedPosts"),
  loading: EmptyPage
})

const AuthedProjects = Loadable({
  loader: () => import("containers/AuthedProjects"),
  loading: EmptyPage
})

const AdminIndex = Loadable({
  loader: () => import("containers/AdminIndex"),
  loading: EmptyPage
})

const Users = Loadable({
  loader: () => import("containers/Users"),
  loading: EmptyPage
})

const Roles = Loadable({
  loader: () => import("containers/Roles"),
  loading: EmptyPage
})

const Resumes = Loadable({
  loader: () => import("containers/Resumes"),
  loading: EmptyPage
})

const Notifications = Loadable({
  loader: () => import("containers/Notifications"),
  loading: EmptyPage
})

const Comments = Loadable({
  loader: () => import("containers/Comments"),
  loading: EmptyPage
})

const Media = Loadable({
  loader: () => import("containers/Media"),
  loading: EmptyPage
})

const Mangas = Loadable({
  loader: () => import("containers/Mangas"),
  loading: EmptyPage
})

const MangaGallery = Loadable({
  loader: () => import("containers/MangaGallery"),
  loading: EmptyPage
})

const Visits = Loadable({
  loader: () => import("containers/Visits"),
  loading: EmptyPage
})

class AuthedRoutes extends Component {
  render() {
    return (
      <ReactCSSTransitionReplace
        transitionName="cross-fade"
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={1000}
      >
        <div key={this.props.location.pathname}>
          <Switch location={this.props.location}>
            {
              // Vanilla Routes
            }
            <Route path="/" exact component={Home}/>
            <Route path="/about_me" component={AboutMe}/>
            <Route path="/web_resume" component={WebResume}/>
            <Route path="/resume_welcome" component={WebResume}/>
            <Route path="/blog" component={Blog}/>
            <Route path="/portfolio" component={Portfolio}/>
            <Route path="/graphics_welcome" component={Graphics}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/login" component={Login}/>
            <Route path="/posts/:id" component={EmptyPage}/>
            <Route path="/projects/:id" component={EmptyPage}/>
            <Route path="/graphics/:id" component={EmptyPage}/>
            <Route path="/users/:id" component={EmptyPage}/>
            <Route path="/resumes/:id" component={EmptyPage}/>
            <Route path="/roles/:id" component={EmptyPage}/>
            <Route path="/notifications/:id" component={EmptyPage}/>
            <Route path="/comments/:id" component={EmptyPage}/>
            <Route path="/media/:id" component={EmptyPage}/>
            <Route path="/google_maps_location" component={Contact}/>
            <Route path="/search" component={EmptyPage}/>
            <Route path="/search_results">
              <SearchResults location={this.props.location}/>
            </Route>
            <Route path="/site_stats" component={EmptyPage}/>
            {
              // Authed Routes
            }
            <Route path="/graphics" component={AuthedGraphics}/>
            <Route path="/posts" component={AuthedPosts}/>
            <Route path="/projects" component={AuthedProjects}/>
            <Route path="/admin">
              <AdminIndex currentUser={this.props.currentUser}/>
            </Route>
            <Route exact path="/users/:id/activity" component={EmptyPage}/>
            <Route path="/users" component={Users}/>
            <Route path="/resumes" component={Resumes}/>
            <Route path="/roles" component={Roles}/>
            <Route path="/notifications" component={Notifications}/>
            <Route path="/comments" component={Comments}/>
            <Route path="/media" component={Media}/>
            <Route path="/mangas" component={Mangas}/>
            <Route path="/manga_gallery" component={MangaGallery}/>
            <Route path="/visits" component={Visits}/>

            <Route component={UnknownPage}/>
          </Switch>
        </div>
      </ReactCSSTransitionReplace>
    )
  }
}

export default AuthedRoutes
