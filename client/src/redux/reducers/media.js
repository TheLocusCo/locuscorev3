import * as async from 'redux/actions/async'
import * as sync from 'redux/actions/sync'

export function medium(
  state = {
    isFetching: false,
    needsUpdate: true,
    content: {}
  },
  action
) {
  switch (action.type) {
    case sync.REQUEST_MEDIUM:
      return Object.assign({}, state, {
        isFetching: true,
        needsUpdate: false
      })
    case async.RECEIVE_MEDIUM:
      return Object.assign({}, state, {
        isFetching: false,
        needsUpdate: false,
        content: action.medium,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

export function media(
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
    case sync.REQUEST_MEDIA:
      return Object.assign({}, state, {
        isFetching: true,
        needsUpdate: false
      })
    case async.RECEIVE_MEDIA:
      return Object.assign({}, state, {
        isFetching: false,
        needsUpdate: false,
        items: action.media,
        lastUpdated: action.receivedAt,
        totalPages: action.totalPages,
        paginationMeta: action.paginationMeta
      })
    case "CLEANUP_AFTER_DESTROY_MEDIUM":
      return { items: state.items.filter(objectInState => objectInState.id !== action.idToCleanup) }
    default:
      return state
  }
}
