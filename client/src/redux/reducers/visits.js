import * as async from 'redux/actions/async'
import * as sync from 'redux/actions/sync'

export function visit(
  state = {
    isFetching: false,
    needsUpdate: true,
    content: {event_days: [], event_links: []}
  },
  action
) {
  switch (action.type) {
    case sync.REQUEST_VISIT:
      return Object.assign({}, state, {
        isFetching: true,
        needsUpdate: false
      })
    case async.RECEIVE_VISIT:
      return Object.assign({}, state, {
        isFetching: false,
        needsUpdate: false,
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
    needsUpdate: true,
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
        needsUpdate: false
      })
    case async.RECEIVE_VISITS:
      return Object.assign({}, state, {
        isFetching: false,
        needsUpdate: false,
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
