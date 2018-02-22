import React, { Component } from 'react'
import './style.css'
import LightBoxShowMediumContent from '../../components/LightBoxShowMediumContent'
import LightBoxErrorPage from '../../components/LightBoxErrorPage'
import { connect } from "react-redux"
import { fetchShowMedium } from "../../redux/actions"
import { Route } from 'react-router-dom'

class LightBoxShowMedium extends Component {
  componentWillMount() {
    var id = this.props.location.pathname.split("/").reverse()[1]
    var type = this.props.location.pathname.split("/").reverse()[0]
    this.props.dispatch(fetchShowMedium(id, type))
  }

  render() {
    const { object, isFetching, errorContent, location, locationToPush } = this.props
    return (
      <Route render={({history}) => (
        <div className="ltbx-wrap" tabIndex="-1">
          <div className="ltbx-container">
            <div className="ltbx-content">
              {isFetching && !object.id && <h1 className="section-heading larger">Loading...</h1>}
              {errorContent.length > 0 &&
                <LightBoxErrorPage errorContent={errorContent}/>
              }
              {object.id &&
                <LightBoxShowMediumContent {...object} location={location}/>
              }
              <button onClick={() => history.push(locationToPush)} title="Close (Esc)" type="button" className="ltbx-close">×</button>
              <button onClick={() => history.go(-1)} title="Close (Esc)" type="button" className="ltbx-close ltbx-back"><i className="icon-back"/></button>
            </div>
          </div>
          <div className="ltbx-bg" onClick={() => history.push(locationToPush)} />
        </div>
      )}/>
    )
  }
}

const mapStateToProps = state => ({
  object: state.medium.content,
  errorContent: state.errorMessages.items,
  isFetching: state.post.isFetching
})

export default connect(mapStateToProps)(LightBoxShowMedium)
