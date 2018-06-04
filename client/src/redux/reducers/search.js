import * as async from 'redux/actions/async'
import * as sync from 'redux/actions/sync'

export function searchAbility(
  state = {
    tree: {},
    isFetching: false,
  },
  action
) {
  switch(action.type) {
    case sync.REQUEST_SEARCH_ABILITY:
      return Object.assign({}, state, {
        isFetching: true
      })
    case async.RECEIVE_SEARCH_ABILITY:
      return Object.assign({}, state, {
        isFetching: false,
        tree: action.searchAbility,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

export function currentSearch(
  state = {
    fields: [],
    model: "",
    forSelects: {},
    isFetching: false,
  },
  action
) {
  switch(action.type) {
    case sync.UPDATE_CURRENT_SEARCH_FIELDS:
      return Object.assign({}, state, {
        fields: state.fields.concat(action.field)
      })
    case sync.UPDATE_CURRENT_SEARCH_MODEL:
      return Object.assign({}, state, {
        model: action.model
      })
    case sync.REQUEST_SELECTS_FOR_SEARCH:
      return Object.assign({}, state, {
        isFetching: true
      })
    case async.RECEIVE_SELECTS_FOR_SEARCH:
      let newForSelect = state.forSelects
      newForSelect[action.field] = action.results
      return Object.assign({}, state, {
        forSelects: newForSelect,
        fields:  state.fields.concat(action.field),
        isFetching: false
      })
    case sync.DELETE_CURRENT_SEARCH:
      return Object.assign({}, state, {
        fields: [],
        model: "",
        forSelects: {}
      })
    case sync.DELETE_FIELD_FROM_CURRENT_SEARCH:
      return Object.assign({}, state, {
        fields: state.fields.filter(fieldName => fieldName !== action.fieldToRemove)
      })
    default:
      return state
  }
}

export function currentSearchResults(
  state = {
    model: "",
    params: {},
    items: [],
    isFetching: false,
    totalPages: 1,
    paginationMeta: {}
  },
  action
) {
  switch(action.type) {
    case sync.REQUEST_SEARCH_RESULTS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case async.RECEIVE_SEARCH_RESULTS:
      return Object.assign({}, state, {
        model: action.model,
        items: action.results,
        params: action.params,
        totalPages: action.totalPages,
        paginationMeta: action.paginationMeta,
        isFetching: false
      })
    case sync.DELETE_SEARCH_RESULTS:
      return Object.assign({}, state, {
        model: "",
        items: [],
        params: {},
        totalPages: 1,
        paginationMeta: {},
        isFetching: false
      })
    default:
      return state
  }
}
