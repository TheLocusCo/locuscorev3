function fetchAPIURL() {
  if (process.env.NODE_ENV === 'production') {
    return "https://thelocus.co"
  } else {
    return `${process.env.REACT_APP_BASE_ENDPOINT}:${process.env.REACT_APP_API_PORT}`
  }
}

function genericAuthedGet() {
  return {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "access-token": localStorage.accessToken || "",
      "token-type":   "Bearer",
      "client":       localStorage.tokenClient || "",
      "expiry":       localStorage.tokenExpiry || "",
      "uid":          localStorage.uid || ""
    }
  }
}

export function categoriesFetch(type) {
  switch (type) {
    case "all":
      return fetch(`${fetchAPIURL()}/api/categories?type=${type}`)
    default:
      return fetch(`${fetchAPIURL()}/api/categories?type=${type}&mode=withAllCat`)
  }
}

export function commentFetch(id) {
  return fetch(`${fetchAPIURL()}/authed/comments/${id}`, genericAuthedGet())
}

export function commentsFetch(page) {
  return fetch(`${fetchAPIURL()}/authed/comments?page=${page}`, genericAuthedGet())
}

export function graphicsFetch(page) {
  return fetch(`${fetchAPIURL()}/api/graphics?page=${page}`)
}

export function graphicFetch(id) {
  return fetch(`${fetchAPIURL()}/api/graphics/${id}`)
}

export function mangaFetch(id) {
  return fetch(`${fetchAPIURL()}/authed/mangas/${id}`, genericAuthedGet())
}

export function mangasFetch(mode, page) {
  return fetch(`${fetchAPIURL()}/authed/mangas?page=${page}&mode=${mode}`, genericAuthedGet())
}

export function mediumFetch(id) {
  return fetch(`${fetchAPIURL()}/authed/media/${id}?mode=standard`, genericAuthedGet())
}

export function mediaFetch(mode, page) {
  return fetch(`${fetchAPIURL()}/authed/media?page=${page}&mode=${mode}`, genericAuthedGet())
}

export function notificationFetch(id) {
  return fetch(`${fetchAPIURL()}/authed/notifications/${id}`, genericAuthedGet())
}

export function notificationsFetch(page) {
  return fetch(`${fetchAPIURL()}/authed/notifications?page=${page}`, genericAuthedGet())
}

export function postsFetch(fetchMode, page) {
  return fetch(`${fetchAPIURL()}/api/posts?mode=${fetchMode}&page=${page}`)
}

export function postFetch(id) {
  return fetch(`${fetchAPIURL()}/api/posts/${id}`)
}

export function projectsFetch(fetchMode, page) {
  return fetch(`${fetchAPIURL()}/api/projects?mode=${fetchMode}&page=${page}`)
}

export function projectFetch(id) {
  return fetch(`${fetchAPIURL()}/api/projects/${id}`)
}

export function resourcesFetch(resourceType, currentPage) {
  switch (resourceType) {
    case "graphics": case "posts":
      return fetch(`${fetchAPIURL()}/api/${resourceType}?page=${currentPage}`)
    case "projects":
      return fetch(`${fetchAPIURL()}/api/projects?mode=paginated&page=${currentPage}`)
    case "mangas":
      return fetch(`${fetchAPIURL()}/authed/${resourceType}?mode=paginated&page=${currentPage}`, genericAuthedGet())
    default:
      return fetch(`${fetchAPIURL()}/authed/${resourceType}?page=${currentPage}`, genericAuthedGet())
  }
}

export function resumeFetch(id) {
  return fetch(`${fetchAPIURL()}/authed/resumes/${id}`, genericAuthedGet())
}

export function resumesFetch(page) {
  return fetch(`${fetchAPIURL()}/authed/resumes?page=${page}`, genericAuthedGet())
}

export function roleFetch(id) {
  return fetch(`${fetchAPIURL()}/authed/roles/${id}`, genericAuthedGet())
}

export function rolesFetch(page) {
  return fetch(`${fetchAPIURL()}/authed/roles?page=${page}`, genericAuthedGet())
}

export function userFetch(id) {
  return fetch(`${fetchAPIURL()}/authed/users/${id}`, genericAuthedGet())
}

export function usersFetch(page) {
  return fetch(`${fetchAPIURL()}/authed/users?page=${page}`, genericAuthedGet())
}

export function commentCreate(comment) {
  let resourceToSend = {}
  resourceToSend["comment"] = comment

  if(comment.user_id) {
    return fetch(`${fetchAPIURL()}/authed/comments`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "access-token": localStorage.accessToken || "",
        "token-type":   "Bearer",
        "client":       localStorage.tokenClient || "",
        "expiry":       localStorage.tokenExpiry || "",
        "uid":          localStorage.uid || ""
      },
      body: JSON.stringify(resourceToSend)
    })
  } else {
    return fetch(`${fetchAPIURL()}/api/comments`, {
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
  return fetch(`${fetchAPIURL()}/api/notifications`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(resourceToSend)
  })
}

export function userNotificationsFetch(userId) {
  return fetch(`${fetchAPIURL()}/authed/notifications?mode=forUser&forUser=${userId}`, genericAuthedGet())
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

  return fetch(`${fetchAPIURL()}/authed/${resourcePlural}/${resource.id}`, {
    method: "PATCH",
    headers: {
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

export function resourceCreate(resourcePlural, resourceType, resource) {
  let resourceToSend = {}
  resourceToSend[resourceType] = resource

  return fetch(`${fetchAPIURL()}/authed/${resourcePlural}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "access-token": localStorage.accessToken || "",
      "token-type":   "Bearer",
      "client":       localStorage.tokenClient || "",
      "expiry":       localStorage.tokenExpiry || "",
      "uid":          localStorage.uid || ""
    },
    body: JSON.stringify(resourceToSend)
  })
}

export function resourceDestroy(resourcePlural, resource) {
  var resourceToSend = {}
  resourceToSend["id"] = resource.id

  return fetch(`${fetchAPIURL()}/authed/${resourcePlural}/${resource.id}`, {
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

export function resourceFetch(resource, id) {
  return fetch(`${fetchAPIURL()}/authed/${resource}/${id}/edit`, genericAuthedGet())
}

export function resourceNewFetch(resource) {
  return fetch(`${fetchAPIURL()}/authed/${resource}/new`, genericAuthedGet())
}

export function resourcePatch(resourcePlural, resourceType, resource) {
  var resourceToSend = {}
  resourceToSend["id"] = resource.id
  resourceToSend[resourceType] = resource

  return fetch(`${fetchAPIURL()}/authed/${resourcePlural}/${resource.id}`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "access-token": localStorage.accessToken || "",
      "token-type":   "Bearer",
      "client":       localStorage.tokenClient || "",
      "expiry":       localStorage.tokenExpiry || "",
      "uid":          localStorage.uid || ""
    },
    body: JSON.stringify(resourceToSend)
  })
}

export function showMediumFetch(id, type) {
  return fetch(`${fetchAPIURL()}/api/media/${id}/${type}`)
}

export function userAuth() {
  return fetch(`${fetchAPIURL()}/auth/validate_token`, genericAuthedGet())
}

export function userLogout() {
  return fetch(`${fetchAPIURL()}/auth/sign_out`, {
    method: "DELETE",
    headers: {
      "access-token": localStorage.accessToken || "",
      "token-type":   "Bearer",
      "client":       localStorage.tokenClient || "",
      "expiry":       localStorage.tokenExpiry || "",
      "uid":          localStorage.uid || ""
    }
  })
}

export function userLogin(user) {
  return fetch(`${fetchAPIURL()}/auth/sign_in`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: user.email,
      password: user.password
    })
  })
}

export function userRoleFetch(user) {
  return fetch(`${fetchAPIURL()}/authed/roles/${user.role_id}`, genericAuthedGet())
}
