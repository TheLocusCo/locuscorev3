import * as async from 'redux/actions/async'
import * as sync from 'redux/actions/sync'

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
    filteredItems: [],
    activeCategory: {id: 0, name: 'All Categories'},
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
        filteredItems: action.mangas,
        lastUpdated: action.receivedAt,
        totalPages: action.totalPages,
        paginationMeta: action.paginationMeta
      })
    case "CLEANUP_AFTER_MANGAS_GALLERY":
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: [],
        filteredItems: [],
        totalPages: 1,
        paginationMeta: {}
      })
    case sync.FILTER_MANGAS:
      return Object.assign({}, state, {
        filteredItems: state.items.filter(objectInState =>
          objectInState.categories.filter(item =>
            item.name === action.activeCategory.name
          ).length > 0
        ),
        activeCategory: action.activeCategory
      })
    case "CLEANUP_AFTER_DESTROY_MANGA":
      return Object.assign({}, state, {
        items: state.items.filter(objectInState =>
          objectInState.id !== action.idToCleanup)
      })
    default:
      return state
  }
}
