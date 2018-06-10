import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { connect } from 'react-redux'

import LightBoxCommentContent from 'components/lightbox/LightBoxCommentContent'
import LightBoxCommentForm from 'components/lightbox/LightBoxCommentForm'
import SuccessBlock from 'containers/iterators/SuccessBlock'

import { setCommentFormVisibility, removePreviewCommentAndSetCommentFormVisibility } from 'redux/actions'

class LightBoxComments extends Component {
  componentWillUnmount() {
    this.props.dispatch(removePreviewCommentAndSetCommentFormVisibility())
  }

  setToVisible() {
    this.props.dispatch(setCommentFormVisibility(true))
  }

  renderComments(comments, currentUser) {
    return comments.map(comment => {
      if (comment.approved) {
        return (
          <LightBoxCommentContent {...comment} currentUser={currentUser} key={comment.id} />
        )
      } else {
        return null
      }
    })
  }

  render() {
    const { comments, currentUser, errorContent, successContent, resourceId, resourceType, previewComment, commentFormVisibility } = this.props
    return (
      <div className="box-dark ltbx-comment-box">
        <ReactCSSTransitionGroup transitionName="group-fade-wait" transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={500} transitionAppear={true}>
          {this.renderComments(comments, currentUser)}
        </ReactCSSTransitionGroup>
        <ReactCSSTransitionGroup transitionName="group-fade-wait" transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={500} transitionAppear={true}>
          {!commentFormVisibility &&
            <div key={1} className="button" onClick={() => {this.setToVisible()}}>Leave a comment?</div>
          }
          {commentFormVisibility &&
            <LightBoxCommentForm currentUser={currentUser} errorContent={errorContent} resourceId={resourceId} resourceType={resourceType}/>
          }
          {previewComment.isPreview &&
            <LightBoxCommentContent key={3} {...previewComment} currentUser={currentUser} />
          }
        </ReactCSSTransitionGroup>
        {successContent.length > 0 &&
          <div className="margin-top-10">
            <SuccessBlock content={successContent}/>
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  errorContent: state.errorMessages.items,
  previewComment: state.previewComment.content,
  commentFormVisibility: state.commentFormVisibility.status
})

export default connect(mapStateToProps)(LightBoxComments)
