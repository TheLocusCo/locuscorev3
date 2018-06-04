import * as async from 'redux/actions/async'
import * as sync from 'redux/actions/sync'

export function role(
  state = {
    isFetching: false,
    didInvalidate: false,
    content: {}
  },
  action
) {
  switch (action.type) {
    case sync.REQUEST_ROLE:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case async.RECEIVE_ROLE:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
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
    didInvalidate: false,
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
        didInvalidate: false
      })
    case async.RECEIVE_ROLES:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
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
