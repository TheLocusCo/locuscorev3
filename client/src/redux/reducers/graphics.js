import * as async from 'redux/actions/async'
import * as sync from 'redux/actions/sync'

export function graphic(
  state = {
    isFetching: false,
    needsUpdate: true,
    content: {}
  },
  action
) {
  switch (action.type) {
    case sync.REQUEST_GRAPHIC:
      return Object.assign({}, state, {
        isFetching: true,
        needsUpdate: false
      })
    case async.RECEIVE_GRAPHIC:
      return Object.assign({}, state, {
        isFetching: false,
        needsUpdate: false,
        content: action.graphic,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

export function graphics(
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
    case sync.REQUEST_GRAPHICS:
      return Object.assign({}, state, {
        isFetching: true,
        needsUpdate: false
      })
    case async.RECEIVE_GRAPHICS:
      return Object.assign({}, state, {
        isFetching: false,
        needsUpdate: false,
        items: action.graphics,
        lastUpdated: action.receivedAt,
        totalPages: action.totalPages,
        paginationMeta: action.paginationMeta
      })
    case "CLEANUP_AFTER_DESTROY_GRAPHIC":
      return { items: state.items.filter(objectInState => objectInState.id !== action.idToCleanup) }
    default:
      return state
  }
}
