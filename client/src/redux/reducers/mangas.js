import * as async from '../actions/async'
import * as sync from '../actions/sync'

export function manga(
  state = {
    isFetching: false,
    didInvalidate: false,
    content: {}
  },
  action
) {
  switch (action.type) {
    case sync.REQUEST_MANGA:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case async.RECEIVE_MANGA:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        content: action.manga,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

export function mangas(
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
    case sync.REQUEST_MANGAS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case async.RECEIVE_MANGAS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.mangas,
        lastUpdated: action.receivedAt,
        totalPages: action.totalPages,
        paginationMeta: action.paginationMeta
      })
    case "CLEANUP_AFTER_MANGAS_GALLERY":
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: [],
        totalPages: 1,
        paginationMeta: {}
      })
    case "CLEANUP_AFTER_DESTROY_MEDIUM":
      return { items: state.items.filter(objectInState => objectInState.id !== action.idToCleanup) }
    default:
      return state
  }
}
