import * as http from "../http"
import * as sync from "../sync"

import { setupAndCreateNotification } from "./notifications.js"
import { fetchResource } from "./resources.js"

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT'

export function createComment(comment, resourceTypeToFetch, resourceId) {
  comment[resourceTypeToFetch] = {}
  comment[resourceTypeToFetch].id = resourceId
  return dispatch =>
    http.commentCreate(comment).then(function(response) {
      //setLocalStorageFromHeaders(response.headers)

      return response.json()
    }).then(response => {
      if (Object.keys(response).includes("data") && Object.keys(response.data).includes("id")) {
        let message = "A comment was added to the system by " + comment.poster_name + "!"
        dispatch(setupAndCreateNotification(message, comment.poster_name, comment.poster_email, "chat"))
        dispatch(sync.successMessage("Your comment was successfully submitted for approval"))
        dispatch(removePreviewCommentAndSetCommentFormVisibility())
        switch (resourceTypeToFetch) {
          case "graphic":
            return dispatch(fetchResource(resourceTypeToFetch, 'graphics', resourceId))
          case "manga":
            return dispatch(fetchResource(resourceTypeToFetch, 'mangas', resourceId))
          case "post":
            return dispatch(fetchResource(resourceTypeToFetch, 'posts', resourceId))
          case "project":
            return dispatch(fetchResource(resourceTypeToFetch, 'projects', resourceId))
          default:
            return null
        }
      } else {
        dispatch(sync.createResourceFailure(response))
      }
    })
}

export function previewComment(comment) {
  return dispatch =>
    dispatch(sync.previewComment(comment))
}

export function removePreviewCommentAndSetCommentFormVisibility() {
  return dispatch => {
    dispatch(sync.deletePreviewComment())
    dispatch(sync.setCommentFormVisibility(false))
  }
}

export function setCommentFormVisibility(visible) {
  return dispatch => {
    return dispatch(sync.setCommentFormVisibility(visible))
  }
}
