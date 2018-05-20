import React, { Component } from 'react'
import ReactCSSTransitionReplace from 'react-css-transition-replace'
import { Switch, Route } from 'react-router-dom'
import Loadable from 'react-loadable'

import Home from "../Home"
import AboutMe from "../AboutMe"
import WebResume from "../WebResume"
import Blog from "../Blog"
import Portfolio from "../Portfolio"
import Contact from "../Contact"
import Login from "../Login"
import SearchResults from "../SearchResults"
import EmptyPage from "../../components/EmptyPage"
import UnknownPage from "../../components/UnknownPage"

const Graphics = Loadable({
  loader: () => import("../Graphics"),
  loading: EmptyPage
})

const AuthedGraphics = Loadable({
  loader: () => import("../AuthedGraphics"),
  loading: EmptyPage
})

const AuthedPosts = Loadable({
  loader: () => import("../AuthedPosts"),
  loading: EmptyPage
})

const AuthedProjects = Loadable({
  loader: () => import("../AuthedProjects"),
  loading: EmptyPage
})

const AdminIndex = Loadable({
  loader: () => import("../AdminIndex"),
  loading: EmptyPage
})

const Users = Loadable({
  loader: () => import("../Users"),
  loading: EmptyPage
})

const Roles = Loadable({
  loader: () => import("../Roles"),
  loading: EmptyPage
})

const Resumes = Loadable({
  loader: () => import("../Resumes"),
  loading: EmptyPage
})

const Notifications = Loadable({
  loader: () => import("../Notifications"),
  loading: EmptyPage
})

const Comments = Loadable({
  loader: () => import("../Comments"),
  loading: EmptyPage
})

const Media = Loadable({
  loader: () => import("../Media"),
  loading: EmptyPage
})

const Mangas = Loadable({
  loader: () => import("../Mangas"),
  loading: EmptyPage
})

const MangaGallery = Loadable({
  loader: () => import("../MangaGallery"),
  loading: EmptyPage
})

const Visits = Loadable({
  loader: () => import("../Visits"),
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
            {
              // Authed Routes
            }
            <Route path="/graphics" component={AuthedGraphics}/>
            <Route path="/posts" component={AuthedPosts}/>
            <Route path="/projects" component={AuthedProjects}/>
            <Route path="/admin">
              <AdminIndex currentUser={this.props.currentUser}/>
            </Route>
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
