import * as async from 'redux/actions/async'
import * as sync from 'redux/actions/sync'

export function project(
  state = {
    isFetching: false,
    needsUpdate: true,
    content: {}
  },
  action
) {
  switch (action.type) {
    case sync.REQUEST_PROJECT:
      return Object.assign({}, state, {
        isFetching: true,
        needsUpdate: false
      })
    case async.RECEIVE_PROJECT:
      return Object.assign({}, state, {
        isFetching: false,
        needsUpdate: false,
        content: action.project,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

export function projects(
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
    case sync.REQUEST_PROJECTS:
      return Object.assign({}, state, {
        isFetching: true,
        needsUpdate: false
      })
    case async.RECEIVE_PROJECTS:
      return Object.assign({}, state, {
        isFetching: false,
        needsUpdate: false,
        items: action.projects,
        filteredItems: action.projects,
        lastUpdated: action.receivedAt,
        totalPages: action.totalPages,
        paginationMeta: action.paginationMeta
      })
    case sync.FILTER_PROJECTS:
      return Object.assign({}, state, {
        filteredItems: state.items.filter(objectInState =>
          objectInState.categories.filter(item =>
            item.name === action.activeCategory.name
          ).length > 0
        ),
        activeCategory: action.activeCategory
      })
    case "CLEANUP_AFTER_DESTROY_PROJECT":
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
