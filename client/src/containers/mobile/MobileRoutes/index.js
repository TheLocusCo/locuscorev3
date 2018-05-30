import React, { Component } from 'react'
import { connect } from "react-redux"
import ReactCSSTransitionReplace from 'react-css-transition-replace'
import { Switch, Route } from 'react-router-dom'
import Loadable from 'react-loadable'

import Home from "../../Home"
// import AboutMe from "../AboutMe"
// import WebResume from "../WebResume"
// import Blog from "../Blog"
// import Portfolio from "../Portfolio"
// import Contact from "../Contact"
// import Login from "../Login"
import SearchResults from "../../SearchResults"
import EmptyPage from "../../../components/EmptyPage"
import UnknownPage from "../../../components/UnknownPage"

class MobileRoutes extends Component {
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
            <Route path="/posts/:id" component={EmptyPage}/>
            <Route path="/projects/:id" component={EmptyPage}/>
            <Route path="/graphics/:id" component={EmptyPage}/>
            <Route path="/media/:id" component={EmptyPage}/>
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

export default MobileRoutes
