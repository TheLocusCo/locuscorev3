import React, { Component } from 'react'
import ReactCSSTransitionReplace from 'react-css-transition-replace'
import { Switch, Route } from 'react-router-dom'
import Loadable from 'react-loadable'

import Home from "containers/pages/Home"
import AboutMe from "containers/pages/AboutMe"
import WebResume from "containers/pages/WebResume"
import Blog from "containers/pages/Blog"
import Portfolio from "containers/pages/Portfolio"
import Contact from "containers/pages/Contact"
import Login from "containers/pages/Login"
import SearchResults from "containers/pages/SearchResults"
import EmptyPage from "components/EmptyPage"
import UnknownPage from "components/UnknownPage"

const Graphics = Loadable({
  loader: () => import("containers/pages/Graphics"),
  loading: EmptyPage
})

const AuthedGraphics = Loadable({
  loader: () => import("containers/pages/AuthedGraphics"),
  loading: EmptyPage
})

const AuthedPosts = Loadable({
  loader: () => import("containers/pages/AuthedPosts"),
  loading: EmptyPage
})

const AuthedProjects = Loadable({
  loader: () => import("containers/pages/AuthedProjects"),
  loading: EmptyPage
})

const AdminIndex = Loadable({
  loader: () => import("containers/pages/AdminIndex"),
  loading: EmptyPage
})

const Users = Loadable({
  loader: () => import("containers/pages/Users"),
  loading: EmptyPage
})

const Roles = Loadable({
  loader: () => import("containers/pages/Roles"),
  loading: EmptyPage
})

const Resumes = Loadable({
  loader: () => import("containers/pages/Resumes"),
  loading: EmptyPage
})

const Notifications = Loadable({
  loader: () => import("containers/pages/Notifications"),
  loading: EmptyPage
})

const Comments = Loadable({
  loader: () => import("containers/pages/Comments"),
  loading: EmptyPage
})

const Media = Loadable({
  loader: () => import("containers/pages/Media"),
  loading: EmptyPage
})

const Mangas = Loadable({
  loader: () => import("containers/pages/Mangas"),
  loading: EmptyPage
})

const MangaGallery = Loadable({
  loader: () => import("containers/pages/MangaGallery"),
  loading: EmptyPage
})

const Visits = Loadable({
  loader: () => import("containers/pages/Visits"),
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
