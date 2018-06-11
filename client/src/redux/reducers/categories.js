import * as async from 'redux/actions/async'
import * as sync from 'redux/actions/sync'

export function categories(
  state = {
    isFetching: false,
    needsUpdate: true,
    items: []
  },
  action
) {
  switch (action.type) {
    case sync.REQUEST_CATEGORIES:
      return Object.assign({}, state, {
        isFetching: true,
        needsUpdate: false
      })
    case async.RECEIVE_CATEGORIES:
      return Object.assign({}, state, {
        isFetching: false,
        needsUpdate: false,
        items: action.categories,
        lastUpdated: action.receivedAt
      })
    case sync.EMPTY_CATEGORIES:
      return Object.assign({}, state, {
        isFetching: false,
        needsUpdate: false,
        items: [],
        lastUpdated: action.receivedAt
      })
    case "CLEANUP_AFTER_DESTROY_CATEGORY":
      return { items: state.items.filter(objectInState => objectInState.id !== action.idToCleanup) }
    default:
      return state
  }
}
