import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import './style.css'
import FooterButtonsBlock from 'containers/FooterButtonsBlock'
import { userAuthDestroy } from "redux/actions"

// Update footer based on current path
class AuthedContentFooter extends Component {
  logoutUser(user, history) {
    this.props.dispatch(userAuthDestroy(user))
    history.push("/")
  }

  render() {
    const { location, currentUser, showLogout, displayWebkitBox } = this.props
    return (
      <Route render={({history}) => (
        <div className={displayWebkitBox ? "content-footer webkit-box" : "content-footer"}>
          <div className="wrapper centered">
            {showLogout &&
              <div className="button" onClick={() => {this.logoutUser(currentUser, history)}}>
                <i className="icon-logout"></i>
                Logout
              </div>
            }
            {currentUser.role.pf_posts &&
              <Switch location={location}>
                <Route path="/posts"><FooterButtonsBlock userRole={currentUser.role} location={location} widgetType={["post", "posts"]} /></Route>
                <Route path="/projects"><FooterButtonsBlock userRole={currentUser.role} location={location} widgetType={["project", "projects"]} /></Route>
                <Route path="/graphics"><FooterButtonsBlock userRole={currentUser.role} location={location} widgetType={["graphic", "graphics"]} /></Route>
                <Route path="/users"><FooterButtonsBlock userRole={currentUser.role} location={location} widgetType={["user", "users"]} /></Route>
                <Route path="/resumes"><FooterButtonsBlock userRole={currentUser.role} location={location} widgetType={["resume", "resumes"]} /></Route>
                <Route path="/roles"><FooterButtonsBlock userRole={currentUser.role} location={location} widgetType={["role", "roles"]} /></Route>
                <Route path="/notifications"><FooterButtonsBlock userRole={currentUser.role} location={location} widgetType={["notification", "notifications"]} /></Route>
                <Route path="/comments"><FooterButtonsBlock userRole={currentUser.role} location={location} widgetType={["comment", "comments"]} /></Route>
                <Route path="/media"><FooterButtonsBlock userRole={currentUser.role} location={location} widgetType={["medium", "media"]} /></Route>
                <Route path="/mangas"><FooterButtonsBlock userRole={currentUser.role} location={location} widgetType={["manga", "mangas"]} /></Route>
              </Switch>
            }
          </div>
        </div>
      )}/>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser
})

export default connect(mapStateToProps)(AuthedContentFooter)
