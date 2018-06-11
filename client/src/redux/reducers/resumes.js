import * as async from 'redux/actions/async'
import * as sync from 'redux/actions/sync'

export function resume(
  state = {
    isFetching: false,
    needsUpdate: true,
    content: {}
  },
  action
) {
  switch (action.type) {
    case sync.REQUEST_RESUME:
      return Object.assign({}, state, {
        isFetching: true,
        needsUpdate: false
      })
    case async.RECEIVE_RESUME:
      return Object.assign({}, state, {
        isFetching: false,
        needsUpdate: false,
        content: action.resume,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

export function resumes(
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
    case sync.REQUEST_RESUMES:
      return Object.assign({}, state, {
        isFetching: true,
        needsUpdate: false
      })
    case async.RECEIVE_RESUMES:
      return Object.assign({}, state, {
        isFetching: false,
        needsUpdate: false,
        items: action.resumes,
        lastUpdated: action.receivedAt,
        totalPages: action.totalPages,
        paginationMeta: action.paginationMeta
      })
    case "CLEANUP_AFTER_DESTROY_RESUME":
      return { items: state.items.filter(objectInState => objectInState.id !== action.idToCleanup) }
    default:
      return state
  }
}
