import React, { Component } from 'react'
import ReactCSSTransitionReplace from 'react-css-transition-replace'
import { Switch, Route } from 'react-router-dom'

import Home from "../Home"
import AboutMe from "../AboutMe"
import ResumeWelcome from "../ResumeWelcome"
import Blog from "../Blog"
import Portfolio from "../Portfolio"
import Graphics from "../Graphics"
import Contact from "../Contact"
import Login from "../Login"
import EmptyPage from "../../components/EmptyPage"
import UnknownPage from "../../components/UnknownPage"

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
            <Route path="/resume_welcome" component={ResumeWelcome}/>
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
            <Route component={UnknownPage}/>
          </Switch>
        </div>
      </ReactCSSTransitionReplace>
    )
  }
}

export default Routes
