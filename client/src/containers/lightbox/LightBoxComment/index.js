import React, { Component } from 'react'
import './style.css'
import { connect } from "react-redux"
import { Route } from 'react-router-dom'

import { humanize } from '../../../utils/string'
import SuccessBlock from '../../SuccessBlock'
import LightBoxCommentContent from '../../../components/lightbox/LightBoxCommentContent'
import LightBoxErrorPage from '../../../components/lightbox/LightBoxErrorPage'

import { fetchResource } from "../../../redux/actions"

class LightBoxComment extends Component {
  componentWillMount() {
    var id = this.props.location.pathname.split("/").reverse()[0]
    this.props.dispatch(fetchResource('comment', 'comments', id))
  }

  render() {
    return (
      <Route render={({history}) => (
        <div className="ltbx-wrap" tabIndex="-1">
          <div className="ltbx-container">
            <div className="ltbx-content">
              <SuccessBlock content={this.props.successContent}/>
              {this.props.isFetching && !this.props.comment.id && <h1 className="section-heading larger">Loading...</h1>}
              {this.props.errorContent.length > 0 &&
                <LightBoxErrorPage errorContent={this.props.errorContent}/>
              }
              {this.props.comment.id &&
                <article className="portfolio-item">
                  <h4 className="section-heading">Owned By {humanize(this.props.comment.commentable_type)}: {this.props.comment.owned_by}</h4>
                  <div className="box-dark" style={{marginTop: "30px", paddingTop: "47px"}}>
                    <LightBoxCommentContent {...this.props.comment} location={this.props.location} currentUser={this.props.currentUser}/>
                  </div>
                </article>
              }
              <button onClick={() => history.push(this.props.locationToPush)} title="Close (Esc)" type="button" className="ltbx-close">×</button>
            </div>
          </div>
          <div className="ltbx-bg" onClick={() => history.push(this.props.locationToPush)} />
        </div>
      )}/>
    )
  }
}

const mapStateToProps = state => ({
  comment: state.comment.content,
  currentUser: state.currentUser,
  successContent: state.successMessages.items,
  errorContent: state.errorMessages.items,
  isFetching: state.post.isFetching
})

export default connect(mapStateToProps)(LightBoxComment)
