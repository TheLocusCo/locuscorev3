import * as helpers from 'redux/actions/http/helpers.js'
import { apiUrl } from 'utils/http'

export function searchAbilityFetch(currentUserId) {
  if(currentUserId !== "") {
    return fetch(`${apiUrl()}/authed/search_tree`, helpers.genericAuthedGet())
  } else {
    return fetch(`${apiUrl()}/api/search_tree`)
  }
}

export function searchFieldDataFetch(model, field) {
  if(localStorage.accessToken) {
    return fetch(`${apiUrl()}/authed/field_search?model=${model}&field=${field}`, {
      method: "GET",
      headers: helpers.authedHeaders()
    })
  } else {
    return fetch(`${apiUrl()}/api/field_search?model=${model}&field=${field}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
  }
}

export function searchSubmit(params) {
  if(localStorage.accessToken) {
    return fetch(`${apiUrl()}/authed/search_submit?${params}`, {
      method: "GET",
      headers: helpers.authedHeaders()
    })
  } else {
    return fetch(`${apiUrl()}/api/search_submit?${params}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
  }
}
