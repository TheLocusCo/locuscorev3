import React, { Component } from 'react'
import './style.css'
import LightBoxCommentContent from '../../components/LightBoxCommentContent'
import { connect } from "react-redux"
import { fetchComment } from "../../redux/actions"
import { Route } from 'react-router-dom'
import SuccessBlock from '../SuccessBlock'
import LightBoxErrorPage from '../../components/LightBoxErrorPage'

class LightBoxComment extends Component {
  componentWillMount() {
    var id = this.props.location.pathname.split("/").reverse()[0]
    this.props.dispatch(fetchComment(id))
  }

  humanize(text) {
    return (text.charAt(0).toUpperCase() + text.slice(1).replace(/_/gi, ' '))
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
                  <h4 className="section-heading">Owned By {this.humanize(this.props.comment.commentable_type)}: {this.props.comment.owned_by}</h4>
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
