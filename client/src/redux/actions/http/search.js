import * as helpers from 'redux/actions/http/helpers.js'

export function searchAbilityFetch(currentUserId) {
  if(currentUserId !== "") {
    return fetch(`${helpers.fetchAPIURL()}/authed/search_tree`, helpers.genericAuthedGet())
  } else {
    return fetch(`${helpers.fetchAPIURL()}/api/search_tree`)
  }
}

export function searchFieldDataFetch(model, field) {
  if(localStorage.accessToken) {
    return fetch(`${helpers.fetchAPIURL()}/authed/field_search?model=${model}&field=${field}`, {
      method: "GET",
      headers: helpers.authedHeaders()
    })
  } else {
    return fetch(`${helpers.fetchAPIURL()}/api/field_search?model=${model}&field=${field}`, {
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
    return fetch(`${helpers.fetchAPIURL()}/authed/search_submit?${params}`, {
      method: "GET",
      headers: helpers.authedHeaders()
    })
  } else {
    return fetch(`${helpers.fetchAPIURL()}/api/search_submit?${params}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
  }
}
