import * as async from 'redux/actions/async'
import * as sync from 'redux/actions/sync'

export function editItem(
  state = {
    isFetching: false,
    needsUpdate: true,
    content: {}
  },
  action
) {
  switch (action.type) {
    case sync.REQUEST_EDIT_ITEM:
      return Object.assign({}, state, {
        isFetching: true,
        needsUpdate: false
      })
      case async.RECEIVE_EDIT_ITEM:
      return Object.assign({}, state, {
        isFetching: false,
        needsUpdate: false,
        content: action.resource,
        lastUpdated: action.receivedAt
      })
    case sync.DELETE_EDIT_ITEM:
      return Object.assign({}, state, {
        isFetching: false,
        needsUpdate: false,
        content: {}
      })
    default:
      return state
  }
}

export function newItem(
  state = {
    isFetching: false,
    needsUpdate: true,
    content: {}
  },
  action
) {
  switch (action.type) {
    case sync.REQUEST_NEW_ITEM:
      return Object.assign({}, state, {
        isFetching: true,
        needsUpdate: false
      })
    case async.RECEIVE_NEW_ITEM:
      return Object.assign({}, state, {
        isFetching: false,
        needsUpdate: false,
        content: action.resource,
        lastUpdated: action.receivedAt
      })
    case sync.DELETE_NEW_ITEM:
      return Object.assign({}, state, {
        isFetching: false,
        needsUpdate: false,
        content: {}
      })
    default:
      return state
  }
}

export function uploadItem(
  state = {
    isFetching: false,
    needsUpdate: true,
    content: {}
  },
  action
) {
  switch (action.type) {
    case async.RECEIVE_UPLOAD_ITEM:
      return Object.assign({}, state, {
        isFetching: false,
        needsUpdate: false,
        content: action.resource,
        lastUpdated: action.receivedAt
      })
    case sync.DELETE_UPLOAD_ITEM:
      return Object.assign({}, state, {
        isFetching: false,
        needsUpdate: false,
        content: {}
      })
    default:
      return state
  }
}
