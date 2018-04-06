import * as helpers from './helpers.js'

export function resourceCreate(resourcePlural, resourceType, resource) {
  let resourceToSend = {}
  resourceToSend[resourceType] = resource

  return fetch(`${helpers.fetchAPIURL()}/authed/${resourcePlural}`, {
    method: "POST",
    headers: helpers.authedHeaders(),
    body: JSON.stringify(resourceToSend)
  })
}

export function resourceDestroy(resourcePlural, resource) {
  var resourceToSend = {}
  resourceToSend["id"] = resource.id

  return fetch(`${helpers.fetchAPIURL()}/authed/${resourcePlural}/${resource.id}`, {
    method: "DELETE",
    headers: {
      "access-token": localStorage.accessToken || "",
      "token-type":   "Bearer",
      "client":       localStorage.tokenClient || "",
      "expiry":       localStorage.tokenExpiry || "",
      "uid":          localStorage.uid || ""
    },
    body: JSON.stringify(resourceToSend)
  })
}

export function resourceFetch(resourcePlural, id) {
  switch (resourcePlural) {
    case "graphics": case "posts": case "projects":
      return fetch(`${helpers.fetchAPIURL()}/api/${resourcePlural}/${id}`)
    default:
      return fetch(`${helpers.fetchAPIURL()}/authed/${resourcePlural}/${id}`, helpers.genericAuthedGet())
  }
}

export function resourceFetchForEdit(resource, id) {
  return fetch(`${helpers.fetchAPIURL()}/authed/${resource}/${id}/edit`, helpers.genericAuthedGet())
}

export function resourcesFetch(resourceType, currentPage, params, mode) {
  switch (resourceType) {
    case "graphics":
      return fetch(`${helpers.fetchAPIURL()}/api/${resourceType}?page=${currentPage}`)
    case "projects": case "posts":
      return fetch(`${helpers.fetchAPIURL()}/api/${resourceType}?mode=${mode}&page=${currentPage}`)
    case "mangas": case "media":
      return fetch(`${helpers.fetchAPIURL()}/authed/${resourceType}?mode=${mode}&page=${currentPage}`, helpers.genericAuthedGet())
    case "search_results":
      if (localStorage.accessToken !== "") {
        return fetch(`${helpers.fetchAPIURL()}/authed/search_submit${params.replace(/page=\d/gi, `page=${currentPage}`)}`, helpers.genericAuthedGet())
      } else {
        return fetch(`${helpers.fetchAPIURL()}/api/search_submit${params.replace(/page=\d/gi, `page=${currentPage}`)}`)
      }
    default:
      return fetch(`${helpers.fetchAPIURL()}/authed/${resourceType}?page=${currentPage}`, helpers.genericAuthedGet())
  }
}

export function resourceNewFetch(resource) {
  return fetch(`${helpers.fetchAPIURL()}/authed/${resource}/new`, helpers.genericAuthedGet())
}

export function resourcePatch(resourcePlural, resourceType, resource) {
  var resourceToSend = {}
  resourceToSend["id"] = resource.id
  resourceToSend[resourceType] = resource

  return fetch(`${helpers.fetchAPIURL()}/authed/${resourcePlural}/${resource.id}`, {
    method: "PATCH",
    headers: helpers.authedHeaders(),
    body: JSON.stringify(resourceToSend)
  })
}

export function resourceUpload(resourcePlural, resourceType, resource) {
  let form_data = new FormData()

  // Parse out the upload params from the standard object
  Object.keys(resource).forEach((key) => {
    if (resource[key] instanceof FileList) {
      form_data.append(`${resourceType}[${key}]`, resource[key][0], resource[key][0].name)
    }
  })

  form_data.append(`${resourceType}[id]`, resource.id)

  return fetch(`${helpers.fetchAPIURL()}/authed/${resourcePlural}/${resource.id}`, {
    method: "PATCH",
    headers: {// Can't send "Content-Type": "application/json", or it will bork the multipart send
      Accept: "application/json",
      "access-token": localStorage.accessToken || "",
      "token-type":   "Bearer",
      "client":       localStorage.tokenClient || "",
      "expiry":       localStorage.tokenExpiry || "",
      "uid":          localStorage.uid || ""
    },
    body: form_data
  })
}
