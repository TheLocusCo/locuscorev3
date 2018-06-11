import * as async from 'redux/actions/async'
import * as sync from 'redux/actions/sync'

export function notification(
  state = {
    isFetching: false,
    needsUpdate: true,
    content: {}
  },
  action
) {
  switch (action.type) {
    case sync.REQUEST_NOTIFICATION:
      return Object.assign({}, state, {
        isFetching: true,
        needsUpdate: false
      })
    case async.RECEIVE_NOTIFICATION:
      return Object.assign({}, state, {
        isFetching: false,
        needsUpdate: false,
        content: action.notification,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

export function notifications(
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
    case sync.REQUEST_NOTIFICATIONS:
      return Object.assign({}, state, {
        isFetching: true,
        needsUpdate: false
      })
    case async.RECEIVE_NOTIFICATIONS:
      return Object.assign({}, state, {
        isFetching: false,
        needsUpdate: false,
        items: action.notifications,
        lastUpdated: action.receivedAt,
        totalPages: action.totalPages,
        paginationMeta: action.paginationMeta
      })
    case "CLEANUP_AFTER_DESTROY_NOTIFICATION":
      return { items: state.items.filter(objectInState => objectInState.id !== action.idToCleanup) }
    default:
      return state
  }
}
