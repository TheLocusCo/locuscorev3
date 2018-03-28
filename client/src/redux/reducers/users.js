import * as async from '../actions/async'
import * as sync from '../actions/sync'

export function currentUser(state = {
  email: "",
  name: "",
  username: "",
  id: "",
  role: {}
}, action) {
  switch (action.type) {
    case sync.USER_LOGIN: case sync.USER_AUTH:
      return Object.assign({}, state, {
        email: action.payload.user.email,
        username: action.payload.user.username,
        name: action.payload.user.name,
        role: action.payload.user.role,
        id: action.payload.user.id
      })
    case sync.USER_AUTH_DESTROY:
      return Object.assign({}, state, {
        email: "",
        username: "",
        name: "",
        id: "",
        role: {}
      })
    default: return state
  }
}

export function user(
  state = {
    isFetching: false,
    didInvalidate: false,
    content: {}
  },
  action
) {
  switch (action.type) {
    case sync.REQUEST_USER:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case async.RECEIVE_USER:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        content: action.user,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

export function users(
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
    case sync.REQUEST_USERS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case async.RECEIVE_USERS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.users,
        lastUpdated: action.receivedAt,
        totalPages: action.totalPages,
        paginationMeta: action.paginationMeta
      })
    case "CLEANUP_AFTER_DESTROY_USER":
      return { items: state.items.filter(objectInState => objectInState.id !== action.idToCleanup) }
    default:
      return state
  }
}

export function userNotifications(state = {
  items: [],
  isFetching: false,
  didInvalidate: false
}, action) {
  switch (action.type) {
    case sync.REQUEST_USER_NOTIFICATIONS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case async.RECEIVE_USER_NOTIFICATIONS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.userNotifications,
        lastUpdated: action.receivedAt,
        totalPages: action.totalPages,
        paginationMeta: action.paginationMeta
      })
    case sync.REMOVE_USER_NOTIFICATION:
      return { items: state.items.filter(objectInState => objectInState.id !== action.idToCleanup) }
    default: return state
  }
}
