import * as async from '../actions/async'
import * as sync from '../actions/sync'

export function comment(
  state = {
    isFetching: false,
    didInvalidate: false,
    content: {}
  },
  action
) {
  switch (action.type) {
    case sync.REQUEST_COMMENT:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case async.RECEIVE_COMMENT:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        content: action.comment,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}


export function commentFormVisibility(
  state = {
    status: false
  },
  action
) {
  switch (action.type) {
    case sync.UPDATE_COMMENT_FORM_VISIBILITY:
      return Object.assign({}, state, {
        status: action.status
      })
    default:
      return state
  }
}

export function comments(
  state = {
    isFetching: false,
    didInvalidate: false,
    items: [],
    totalPages: 1,
    paginationMeta: {}
  },
  action
) {
  switch (action.type) {
    case sync.REQUEST_COMMENTS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case async.RECEIVE_COMMENTS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.comments,
        lastUpdated: action.receivedAt,
        totalPages: action.totalPages,
        paginationMeta: action.paginationMeta
      })
    case "CLEANUP_AFTER_DESTROY_COMMENT":
      return { items: state.items.filter(objectInState => objectInState.id !== action.idToCleanup) }
    default:
      return state
  }
}

export function previewComment(
  state = {
    content: {}
  },
  action
) {
  switch (action.type) {
    case sync.UPDATE_PREVIEW_COMMENT:
      return Object.assign({}, state, {
        content: action.previewComment,
        lastUpdated: action.receivedAt
      })
    case sync.DELETE_PREVIEW_COMMENT:
      return Object.assign({}, state, {
        content: {}
      })
    default:
      return state
  }
}
