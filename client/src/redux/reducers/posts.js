import * as async from 'redux/actions/async'
import * as sync from 'redux/actions/sync'

export function post(
  state = {
    isFetching: false,
    needsUpdate: true,
    content: {}
  },
  action
) {
  switch (action.type) {
    case sync.REQUEST_POST:
      return Object.assign({}, state, {
        isFetching: true,
        needsUpdate: false
      })
    case async.RECEIVE_POST:
      return Object.assign({}, state, {
        isFetching: false,
        needsUpdate: false,
        content: action.post,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

export function posts(
  state = {
    isFetching: false,
    needsUpdate: true,
    items: [],
    totalPages: 1,
    paginationMeta: {}
  },
  action
) {
  switch (action.type) {
    case sync.REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true,
        needsUpdate: false
      })
    case async.RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        needsUpdate: false,
        items: action.posts,
        lastUpdated: action.receivedAt,
        totalPages: action.totalPages,
        paginationMeta: action.paginationMeta
      })
    case "CLEANUP_AFTER_DESTROY_POST":
      return { items: state.items.filter(objectInState => objectInState.id !== action.idToCleanup) }
    default:
      return state
  }
}
