import * as async from 'redux/actions/async'
import * as sync from 'redux/actions/sync'

export function role(
  state = {
    isFetching: false,
    needsUpdate: true,
    content: {}
  },
  action
) {
  switch (action.type) {
    case sync.REQUEST_ROLE:
      return Object.assign({}, state, {
        isFetching: true,
        needsUpdate: false
      })
    case async.RECEIVE_ROLE:
      return Object.assign({}, state, {
        isFetching: false,
        needsUpdate: false,
        content: action.role,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

export function roles(
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
    case sync.REQUEST_ROLES:
      return Object.assign({}, state, {
        isFetching: true,
        needsUpdate: false
      })
    case async.RECEIVE_ROLES:
      return Object.assign({}, state, {
        isFetching: false,
        needsUpdate: false,
        items: action.roles,
        lastUpdated: action.receivedAt,
        totalPages: action.totalPages,
        paginationMeta: action.paginationMeta
      })
    case "CLEANUP_AFTER_DESTROY_ROLE":
      return { items: state.items.filter(objectInState => objectInState.id !== action.idToCleanup) }
    default:
      return state
  }
}
