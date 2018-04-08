import * as async from '../actions/async'
import * as sync from '../actions/sync'

export function visit(
  state = {
    isFetching: false,
    didInvalidate: false,
    content: {}
  },
  action
) {
  switch (action.type) {
    case sync.REQUEST_VISIT:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case async.RECEIVE_VISIT:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        content: action.visit,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

export function visits(
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
    case sync.REQUEST_VISITS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case async.RECEIVE_VISITS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.visits,
        lastUpdated: action.receivedAt,
        totalPages: action.totalPages,
        paginationMeta: action.paginationMeta
      })
    case "CLEANUP_AFTER_DESTROY_VISIT":
      return { items: state.items.filter(objectInState => objectInState.id !== action.idToCleanup) }
    default:
      return state
  }
}
