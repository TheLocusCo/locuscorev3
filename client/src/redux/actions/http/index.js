import * as helpers from 'redux/actions/http/helpers.js'
export * from 'redux/actions/http/resources.js'
export * from 'redux/actions/http/search.js'
export * from 'redux/actions/http/users.js'

export function categoriesFetch(type) {
  switch (type) {
    case "all":
      return fetch(`${helpers.fetchAPIURL()}/api/categories?type=${type}`)
    default:
      return fetch(`${helpers.fetchAPIURL()}/api/categories?type=${type}&mode=withAllCat`)
  }
}

export function commentCreate(comment) {
  let resourceToSend = {}
  resourceToSend["comment"] = comment

  if(comment.user_id) {
    return fetch(`${helpers.fetchAPIURL()}/authed/comments`, {
      method: "POST",
      headers: helpers.authedHeaders(),
      body: JSON.stringify(resourceToSend)
    })
  } else {
    return fetch(`${helpers.fetchAPIURL()}/api/comments`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(resourceToSend)
    })
  }
}

export function notificationCreate(notification) {
  let resourceToSend = {}
  resourceToSend["notification"] = notification
  return fetch(`${helpers.fetchAPIURL()}/api/notifications`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(resourceToSend)
  })
}

export function showMediumFetch(id, type) {
  return fetch(`${helpers.fetchAPIURL()}/api/media/${id}/${type}`)
}

export function siteStatsVisitFetch() {
  return fetch(`${helpers.fetchAPIURL()}/api/anon_site_stats`)
}
