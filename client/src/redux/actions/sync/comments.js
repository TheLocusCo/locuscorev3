import * as helpers from 'redux/actions/helpers.js'

export const DELETE_PREVIEW_COMMENT = 'DELETE_PREVIEW_COMMENT'
export const UPDATE_COMMENT_FORM_VISIBILITY = 'UPDATE_COMMENT_FORM_VISIBILITY'
export const UPDATE_PREVIEW_COMMENT = 'UPDATE_PREVIEW_COMMENT'

export function deletePreviewComment() {
  return {
    type: DELETE_PREVIEW_COMMENT
  }
}

export function previewComment(comment) {
  comment.isPreview = true
  comment.created_at = helpers.generateDate()
  comment.receivedAt = Date.now()
  return {
    type: UPDATE_PREVIEW_COMMENT,
    previewComment: comment
  }
}

export function setCommentFormVisibility(visible) {
  return {
    type: UPDATE_COMMENT_FORM_VISIBILITY,
    status: visible
  }
}
