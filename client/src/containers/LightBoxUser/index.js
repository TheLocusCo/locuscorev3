import React, { Component } from 'react'
import './style.css'
import LightBoxUserProfile from '../../components/LightBoxUserProfile'
import { connect } from "react-redux"
import { fetchUser } from "../../redux/actions"
import { Route } from 'react-router-dom'
import SuccessBlock from '../SuccessBlock'
import LightBoxErrorPage from '../../components/LightBoxErrorPage'

class LightBoxUser extends Component {
  targetLocationToPush(history, location, locationToPush) {
    if (location.search === "?profile=true") {
      history.goBack()
    } else {
      history.push(locationToPush)
    }
  }

  componentWillMount() {
    var id = this.props.location.pathname.split("/").reverse()[0]
    this.props.dispatch(fetchUser(id))
  }

  render() {
    return (
      <Route render={({history}) => (
        <div className="ltbx-wrap" tabIndex="-1">
          <div className="ltbx-container">
            <div className="ltbx-content">
              <SuccessBlock content={this.props.successContent}/>
              {this.props.isFetching && !this.props.user.id && <h1 className="section-heading larger">Loading...</h1>}
              {this.props.errorContent.length > 0 &&
                <LightBoxErrorPage errorContent={this.props.errorContent}/>
              }
              {this.props.user.id &&
                <LightBoxUserProfile {...this.props.user} location={this.props.location}/>
              }
              <button onClick={() => this.targetLocationToPush(history, this.props.location, this.props.locationToPush)} title="Close (Esc)" type="button" className="ltbx-close">×</button>
            </div>
          </div>
          <div className="ltbx-bg" onClick={() => this.targetLocationToPush(history, this.props.location, this.props.locationToPush)} />
        </div>
      )}/>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user.content,
  successContent: state.successMessages.items,
  errorContent: state.errorMessages.items,
  isFetching: state.post.isFetching
})

export default connect(mapStateToProps)(LightBoxUser)
