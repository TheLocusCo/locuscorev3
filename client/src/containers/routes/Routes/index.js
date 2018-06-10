import React, { Component } from 'react'
import ReactCSSTransitionReplace from 'react-css-transition-replace'
import { Switch, Route } from 'react-router-dom'
import Loadable from 'react-loadable'

import Home from 'containers/pages/Home'
import AboutMe from 'containers/pages/AboutMe'
import WebResume from 'containers/pages/WebResume'
import Blog from 'containers/pages/Blog'
import Portfolio from 'containers/pages/Portfolio'
import Contact from 'containers/pages/Contact'
import Login from 'containers/pages/Login'
import SearchResults from 'containers/pages/SearchResults'
import EmptyPage from 'components/pages/EmptyPage'
import UnknownPage from 'components/pages/UnknownPage'

const Graphics = Loadable({
  loader: () => import('containers/pages/Graphics'),
  loading: EmptyPage
})

class Routes extends Component {
  render() {
    return (
      <ReactCSSTransitionReplace
        transitionName="cross-fade"
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={1000}
      >
        <div key={this.props.location.pathname}>
          <Switch location={this.props.location}>
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
            <Route path="/media/:id" component={EmptyPage}/>
            <Route path="/google_maps_location" component={Contact}/>
            <Route path="/search" component={EmptyPage}/>
            <Route path="/search_results">
              <SearchResults location={this.props.location}/>
            </Route>
            <Route path="/site_stats" component={EmptyPage}/>
            <Route component={UnknownPage}/>
          </Switch>
        </div>
      </ReactCSSTransitionReplace>
    )
  }
}

export default Routes
