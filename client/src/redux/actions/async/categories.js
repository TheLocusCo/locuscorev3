import * as http from 'redux/actions/http'
import * as sync from 'redux/actions/sync'

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'

export function fetchCategories(type) {
  return dispatch => {
    dispatch(sync.requestCategories())
    return http.categoriesFetch(type)
      .then(response => response.json())
      .then(json => dispatch(receiveCategories(json)))
  }
}

function receiveCategories(json) {
  return {
    type: RECEIVE_CATEGORIES,
    categories: json.data,
    receivedAt: Date.now()
  }
}
