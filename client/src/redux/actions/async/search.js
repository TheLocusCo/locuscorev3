import * as http from 'redux/actions/http'
import * as sync from 'redux/actions/sync'

export const RECEIVE_SEARCH_ABILITY = 'RECEIVE_SEARCH_ABILITY'
export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS'
export const RECEIVE_SELECTS_FOR_SEARCH = 'RECEIVE_SELECTS_FOR_SEARCH'

export function fetchSearchAbility(currentUserId) {
  return dispatch => {
    dispatch(sync.requestSearchAbility())
    return http.searchAbilityFetch(currentUserId)
      .then(response => response.json())
      .then(json => dispatch(receiveSearchAbility(json)))
  }
}

// This only gets called if the user manually navigates to the search_results page
export function fetchSearchResults(params) {
  return dispatch => {
    dispatch(sync.requestSearchResults())
    http.searchSubmit(params.replace(/\?/gi, '')).then(function(response) {
      //setLocalStorageFromHeaders(response.headers)

      return response.json()
    }).then(response => {
      if (Object.keys(response).includes("data")) {
        dispatch(receiveSearchResults(response))
      } else {
        dispatch(sync.errorMessageAsObject(response))
      }
    })
  }
}

function receiveSearchAbility(json) {
  return {
    type: RECEIVE_SEARCH_ABILITY,
    searchAbility: json.data,
    receivedAt: Date.now()
  }
}

function receiveSearchResults(json) {
  return {
    type: RECEIVE_SEARCH_RESULTS,
    results: json.data.results,
    model: json.data.model,
    params: json.data.params,
    totalPages: json.total_pages,
    paginationMeta: json.pagination_meta
  }
}

function receiveSelectsForSearch(field, json) {
  return {
    type: RECEIVE_SELECTS_FOR_SEARCH,
    field: field,
    results: json.data
  }
}

export function searchCleanupCurrentSearch(field) {
  return dispatch =>
    dispatch(sync.deleteFieldFromCurrentSearch(field))
}

export function searchSubmit(values, history) {
  return dispatch => {
    values.page = 1
    let params = new URLSearchParams(Object.entries(values))
    http.searchSubmit(params).then(function(response) {
      //setLocalStorageFromHeaders(response.headers)

      return response.json()
    }).then(response => {
      if (Object.keys(response).includes("data")) {
        dispatch(sync.deleteCurrentSearch())
        dispatch(receiveSearchResults(response))
        history.push(`/search_results?${params}`)
      } else {
        dispatch(sync.errorMessageAsObject(response))
      }
    })
  }
}

export function updateCurrentSearchFieldData(model, field, type, nestedAction, changeFunc) {
  if (nestedAction != null && nestedAction.select_from != null && type !== "order") {
    return dispatch => {
      dispatch(sync.requestSearchFieldData())
      http.searchFieldDataFetch(model, field).then(function(response) {
        //setLocalStorageFromHeaders(response.headers)

        return response.json()
      }).then(response => {
        if (Object.keys(response).includes("data")) {
          dispatch(receiveSelectsForSearch(field, response))
        } else {
          dispatch(sync.errorMessageAsObject(response))
        }
      })
    }
  } else {
    return dispatch => {
      if (type === "hidden" || type === "params") {
        dispatch(changeFunc(field, true, null))
        dispatch(sync.updateCurrentSearchFields(field))
      } else {
        dispatch(sync.updateCurrentSearchFields(field))
      }
    }
  }
}
