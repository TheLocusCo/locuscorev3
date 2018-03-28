export const DELETE_CURRENT_SEARCH = 'DELETE_CURRENT_SEARCH'
export const DELETE_FIELD_FROM_CURRENT_SEARCH = 'DELETE_FIELD_FROM_CURRENT_SEARCH'
export const DELETE_SEARCH_RESULTS = 'DELETE_SEARCH_RESULTS'
export const REQUEST_SELECTS_FOR_SEARCH = 'REQUEST_SELECTS_FOR_SEARCH'
export const REQUEST_SEARCH_ABILITY = 'REQUEST_SEARCH_ABILITY'
export const REQUEST_SEARCH_RESULTS = 'REQUEST_SEARCH_RESULTS'
export const UPDATE_CURRENT_SEARCH_MODEL = 'UPDATE_CURRENT_SEARCH_MODEL'
export const UPDATE_CURRENT_SEARCH_FIELDS = 'UPDATE_CURRENT_SEARCH_FIELDS'

export function deleteCurrentSearch() {
  return {
    type: DELETE_CURRENT_SEARCH
  }
}

export function deleteFieldFromCurrentSearch(field) {
  return {
    type: DELETE_FIELD_FROM_CURRENT_SEARCH,
    fieldToRemove: field
  }
}

export function deleteSearchResults() {
  return {
    type: DELETE_SEARCH_RESULTS
  }
}

export function requestSearchAbility() {
  return {
    type: REQUEST_SEARCH_ABILITY
  }
}

export function requestSearchResults() {
  return {
    type: REQUEST_SEARCH_RESULTS
  }
}

export function requestSearchFieldData() {
  return {
    type: REQUEST_SELECTS_FOR_SEARCH
  }
}

export function updateCurrentSearchFields(field) {
  return {
    type: UPDATE_CURRENT_SEARCH_FIELDS,
    field: field
  }
}

export function updateCurrentSearchModel(model) {
  return {
    type: UPDATE_CURRENT_SEARCH_MODEL,
    model: model
  }
}
