import * as async from 'redux/actions/async'
import * as sync from 'redux/actions/sync'

export function manga(
  state = {
    isFetching: false,
    needsUpdate: true,
    content: {}
  },
  action
) {
  switch (action.type) {
    case sync.REQUEST_MANGA:
      return Object.assign({}, state, {
        isFetching: true,
        needsUpdate: false
      })
    case async.RECEIVE_MANGA:
      return Object.assign({}, state, {
        isFetching: false,
        needsUpdate: false,
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
    needsUpdate: true,
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
        needsUpdate: false
      })
    case async.RECEIVE_MANGAS:
      return Object.assign({}, state, {
        isFetching: false,
        needsUpdate: false,
        items: action.mangas,
        filteredItems: action.mangas,
        lastUpdated: action.receivedAt,
        totalPages: action.totalPages,
        paginationMeta: action.paginationMeta
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
      let filteredItems = state.items.filter(objectInState =>
        objectInState.id !== action.idToCleanup)
      return Object.assign({}, state, {
        items: filteredItems,
        filteredItems: filteredItems
      })
    default:
      return state
  }
}
